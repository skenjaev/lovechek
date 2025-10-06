import { ObjectId } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  pruductLeftCount: number;
  productSize: ProductSize;
  productVolume: number;
  productDesc?: string;
  productImage: string[];
  productViews: number;
}

export interface ProductInquiry {
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  search?: string;
}

export interface ProductInput {
  productImages: string[];
  productStatus?: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productPrice: number;
  pruductLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage?: string[];
  productViews?: number;
}

export interface ProductUpdateInput {
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productPrice?: number;
  pruductLeftCount?: number;
  productSize?: ProductSize;
  productVolume?: number;
  productDesc?: string;
  productImage?: string[];
  productViews?: number;
}