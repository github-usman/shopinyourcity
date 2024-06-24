import { Products } from "../models/products.model.js";

export const getProductDetails = async (req, res) => {
  try {
    const productDetails = await Products.find({});
    res.status(200).json({
      success: true,
      productDetails,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ineternal server Error ${error}`,
    });
  }
};

export const fillProdcut = async (req, res) => {
  const {
    product_name,
    category
  } = req.body;

  try {
        await Products.create({
          product_name,
          category
          });
          res.json(req.body)
     
   
  } catch (error) {
    res.json({
      success: false,
      message: `unable to fill details : ${error}`,
    });
  }
};



export const deleteProduct = async (req, res) => {
  const {_id} = req.body;
  try {
    const isShopExist = await Products.find({_id});
    if(isShopExist){
      await Products.deleteMany({_id})
      res.status(204).json({
        success: true,
        message:'delete Successfully',
        email
      });
    }else{
      res.status(404).json({
        success: true,
        message:'data not found',
        email
      });
    }
   
  } catch (error) {
    res.json({
      success: false,
      message: `Ineternal server Error ${error}`,
    });
  }
};