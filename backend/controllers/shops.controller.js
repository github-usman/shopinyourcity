import { Shop } from "../models/shops.model.js";

export const getShopsDetails = async (req, res) => {
  try {
    const shops = await Shop.find({});
    res.status(200).json({
      success: true,
      shops,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `Ineternal server Error ${error}`,
    });
  }
};

export const registerShops = async (req, res) => {
  const {
    name,
    email,
    phone,
    address,
    opening_time,
    closing_time,
    coordinates,
  } = req.body;

  try {
    const isEmailExist = await Shop.findOne({ email });
    if (isEmailExist === null) {

        await Shop.create({
            name,
            email,
            phone,
            address,
            opening_time,
            closing_time,
            coordinates,
          });
          res.json(req.body)
     
    } else {
        res.json({
            success: false,
            message: `Shop is already registered`,
          });

    }
  } catch (error) {
    res.json({
      success: false,
      message: `unable to register : ${error}`,
    });
  }
};



export const deleteShops = async (req, res) => {
  const {email} = req.body;
  try {
    const isShopExist = await Shop.find({email});
    if(isShopExist){
      await Shop.deleteMany({email})
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