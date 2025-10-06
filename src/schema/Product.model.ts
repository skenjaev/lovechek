import mongoose, {Schema} from 'mongoose';
import { ProductCollection, RegionFilter, ProductStatus} from '../libs/enums/product.enum';


const productSchema =  new Schema({
   
productStatus: {
    type: String,
    enum: ProductStatus,
    default: ProductStatus.PROCESS,
},

productCollection: {
    type: String,
    enum: ProductCollection,
    required: true,
},

productName: {
    type: String,
    required: true,
},

productPrice: {
    type: Number,
    required: true,
},

discountPercent: {
  type: Number,
//   required: false,
  default: undefined,
  min: 0,
  max: 100 
},

region: {
    type: String,
    enum: RegionFilter,
    default: RegionFilter.LOCAL,
},

productDesc: {
    type: String,
},

productImages: {
    type: [String],
    default: [],
},

productViews: {
    type: Number,
    default: 0,
},

viewedBy: {
  type: [mongoose.Schema.Types.ObjectId],
  ref: "Member",
  default: []
}

},
{timestamps: true}  // updatadAt, createdAt
);

productSchema.index(
    { productName: 1, RegionFilter: 1},
    { unique: true} 
);

export default  mongoose.model('Product', productSchema);