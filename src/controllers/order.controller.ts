import { Request, Response } from "express";
import { T } from "../libs/type/common";
import { ExtendedRequest } from "../libs/type/member";
import { OrderInquiry, OrderUpdateInput } from "../libs/type/order";
import { OrderStatus } from "../libs/enums/order.enum";
import { format } from "morgan";
import Errors from "../libs/Errors";
import { HttpCode } from "../libs/Errors";
import OrderService from "../models/Order.service";


const orderService = new OrderService();

const orderController: T = {}; // object : any type for temporary
orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder:");
    const result = await orderService.createOrder(req.member, req.body);
    // console.log("req.:", );

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error, createOrder:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.getMyOrders = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getMyOrders:");
    const { page, limit, orderStatus } = req.query;
    // console.log("req.query:", req.query);

    const inquiry: OrderInquiry = {
      page: Number(page),
      limit: Number(limit),
      orderStatus: orderStatus as OrderStatus,
    };
    console.log("inquiry:", inquiry);
    const resultInquiry = await orderService.getMyOrders(req.member, inquiry);

    res.status(HttpCode.CREATED).json(resultInquiry);
  } catch (err) {
    console.log("Error, getMyOrders:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.updateOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("updateOrder:");
    const input: OrderUpdateInput = req.body;
    // console.log("input:", input);
    const result = await orderService.updateOrder(req.member, input);

    res.status(HttpCode.UPDATED).json(result);
  } catch (err) {
    console.log("Error, updateOrder:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;