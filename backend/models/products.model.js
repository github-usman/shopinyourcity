import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
})

export const Products = mongoose.model("Products",productsSchema);