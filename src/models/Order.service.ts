/* orderService working with two dataCollections: */
import { Member } from "../libs/type/member";
import { shapeIntoMongooseObjectId } from "../libs/config"
import {
  Order,
  OrderInquiry,
  OrderItemInput,
  OrderUpdateInput,
} from "../libs/type/order";
import { ObjectId } from "mongoose";
import MemberService from "./Member.service";
import OrderModel from "../schema/Order.model";
import { HttpCode } from "../libs/Errors";
import { Message } from "../libs/Errors";
import Errors from "../libs/Errors";
import { OrderStatus } from "../libs/enums/order.enum";
import OrderItemModel from "../schema/OrderItem.model";

class OrderService {
  private readonly orderModel;
  private readonly orderItemModel;
  private readonly memberService;

  constructor() {
    this.orderModel = OrderModel;
    this.orderItemModel = OrderItemModel;
    this.memberService = new MemberService();
  }




  public async createOrder(
    member: Member,
    input: OrderItemInput[]
  ): Promise<Order> {
    //console.log("createOrder Input:", input);
    const memberId = shapeIntoMongooseObjectId(member._id);
    const amount = input.reduce((accumulator: number, item: OrderItemInput) => {
      return accumulator + item.itemPrice * item.itemQuantity;
    }, 0);
    const delivery = amount < 100 ? 5 : 0;
    // console.log("values:", amount, delivery);

    try {
      const newOrder: Order = await this.orderModel.create({
        orderTotal: amount + delivery,
        orderDelivery: delivery,
        memberId: memberId,
      });

      const orderId = newOrder._id;
      console.log("orderId:", newOrder._id);
      //TODO: create order items:
      await this.recordOrderItem(orderId, input);
      return newOrder;
    } catch (err) {
      console.log("Error, model:createOrder:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }




  /* Pending Promise callback section */
  private async recordOrderItem(
    orderId: ObjectId,
    input: OrderItemInput[]
  ): Promise<void> {
    const promisedList = input.map(async (item: OrderItemInput) => {
      item.orderId = orderId;
      item.productId = shapeIntoMongooseObjectId(item.productId);
      await this.orderItemModel.create(item);
      return "INSERTED DONE!";
    });

    // console.log("promisedList:", promisedList);
    const orderItemState = await Promise.all(promisedList);
    console.log("orderItemState", orderItemState);
  }




  public async getMyOrders(
    member: Member,
    inquiry: OrderInquiry
  ): Promise<Order[]> {
    const memberId = shapeIntoMongooseObjectId(member._id);
    const matches = { memberId: memberId, orderStatus: inquiry.orderStatus };

    const resultAGG = await this.orderModel
      .aggregate([
        { $match: matches },
        { $sort: { updatedAt: -1 } },
        { $skip: (inquiry.page - 1) * inquiry.limit },
        { $limit: inquiry.limit },
        {
          $lookup: {
            from: "orderItems",
            localField: "_id", // local folder
            foreignField: "orderId", // another folder
            as: "orderItems",
          },
        },
        {
          $lookup: {
            from: "products",
            localField: "orderItems.productId", // local folder
            foreignField: "_id", // another folder
            as: "productData",
          },
        },
      ])
      .exec();
    if (!resultAGG) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return resultAGG;
  }





  public async updateOrder(
    member: Member,
    input: OrderUpdateInput
  ): Promise<Order> {
    const memberId = shapeIntoMongooseObjectId(member._id),
      orderId = shapeIntoMongooseObjectId(input.orderId),
      orderStatus = input.orderStatus;

    const resultUPD = await this.orderModel
      .findByIdAndUpdate(
        {
          memberId: memberId,
          _id: orderId,
        },
        { orderStatus: orderStatus },
        { new: true }
      )
      .exec();

    if (!resultUPD)
      throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    /*orderStatus PAUSE => PROCESS give +1 point */if (orderStatus === OrderStatus.PROCESS) {
      await this.memberService.addUserPoint(member, +1);
    }
    return resultUPD;
  }
}
export default OrderService;