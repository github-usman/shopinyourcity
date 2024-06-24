import mongoose from "mongoose";

// Define the shopProduct schema (for mapping shops and products with additional fields)

const shopProductSchema = new mongoose.Schema({
    shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    product_price: { type: mongoose.Types.Decimal128, required: true },
    discount: { type: mongoose.Types.Decimal128, required: true },
    rating: { type: mongoose.Types.Decimal128, required: true },
    img: { type: String, required: true }
  });
  
  const ShopProduct = mongoose.model('ShopProduct', shopProductSchema);