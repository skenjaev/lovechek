import { 
    ProductCollection, 
    RegionFilter, 
    ProductStatus } from "../enums/product.enum";

export interface Product {
    _id: Object;
    productStatus: ProductStatus;
    productColection: ProductCollection;
    productName: string;
    productPrice: number;
    discountPercent: number;
    region: RegionFilter;
    productDesc?: string;
    productImages: string[];
    productViews: number;
    createdAt: Date;
    updateAt: Date;
}

export interface productInquiry {
    order: string;
    page: number;
    limit: number;
    productCollection?: ProductCollection;
    region?: RegionFilter;
    search: string;
}

export interface ProductInput {
    productStatus?: ProductStatus;
    productColection: ProductCollection;
    productName: string;
    productPrice: number;
    discountPercent?: number;
    region?: RegionFilter;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}

export interface ProductUpdateInput {
    _id: Object;
    productStatus?: ProductStatus;
    productColection?: ProductCollection;
    productName?: string;
    productPrice?: number;
    discountPercent?: number;
    region?: RegionFilter;
    productDesc?: string;
    productImages?: string[];
    productViews?: number;
}