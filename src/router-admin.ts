import express from "express";
const routerAdmin = express.Router();
import bookController from './controllers/book.controller';
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
import * as bcrypt from "bcryptjs";


/// ADMIN
routerAdmin.get("/", bookController.goHome);
routerAdmin
.get("/login",bookController.getLogin)
.post("/login",bookController.processLogin);
routerAdmin
.get("/signup",bookController.getSignup)
.post("/signup", makeUploader("members").single("memberImage"),
bookController.processSignup);

routerAdmin.get("/logout",bookController.logout);
routerAdmin.get("/check-me",bookController.checkAuthSession);

/// Product
routerAdmin.get("/product/all",
    bookController.verifyAdmin, 
    productController.getAllProducts
);
routerAdmin.post("/product/create",
    bookController.verifyAdmin, 
    // uploadProductImage.single('productImage'),
    makeUploader("products").array("productImages", 10),
    productController.createNewProduct);

routerAdmin.post("/product/:id",
    bookController.verifyAdmin, 
    productController.updateChosenProduct);


/// User
routerAdmin.get("/user/all", 
    bookController.verifyAdmin, 
    bookController.getUsers
);
routerAdmin.post("/user/edit", 
    bookController.verifyAdmin, 
    bookController.updateChosenUser
);


export default routerAdmin;