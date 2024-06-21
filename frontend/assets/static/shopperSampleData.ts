import chips from "../media/images/products/chips.jpg";
import rice_basmati from "../media/images/products/rice-basmati.jpeg";
import green_tea_leaves from "../media/images/products/green-tea-leaves.jpg";
import indian_lentil_dahl_masoor_dal from "../media/images/products/indian-lentil-dahl-masoor-dal.webp";
import Sugar from "../media/images/products/sugar.jpg";
import wheat_flour from "../media/images/products/wheat-flour.jpeg";
import Cooking_Oil_Sunflower from "../media/images/products/Cooking_Oil_Sunflower.jpeg";
import salt from "../media/images/products/salt.jpeg";
import spices_mixed from "../media/images/products/spices_mixed.jpeg";
import biscuits from "../media/images/products/biscuits.jpeg";
import Snacks_Namkeen from "../media/images/products/Snacks_Namkeen.jpeg";
import Soft_Drinks from "../media/images/products/Soft_Drinks.jpeg";
import milk from "../media/images/products/milk.jpeg";

const shopperSampleData = [
      {
        "shop_id": 1,
        "name": "Gupta Kirana & General Store",
        "email": "guptakirana123@gmail.com",
        "phone": 9897459918,
        "address": "52W5+3RW, Chilli Int Rd, Ghaatia Azam Khan, Civil Lines, Agra, Uttar Pradesh 282002",
        "openingTime": "",
        "closingtime": "",
        "longitude":"27.194824",
        "latitude" :"78.008716",
        "products" :[
            {"item_id":1, "productName": "Rice (Basmati)", "productPrice": 100, "discount": 0.2, "category": "Breakfast & Instant Food","rating":4.3,"img":rice_basmati},
            {"item_id":2, "productName": "Wheat Flour (Atta)", "productPrice": 50, "discount": 1.5, "category": "Breakfast & Instant Food","rating":4.3,"img":wheat_flour},
            {"item_id":3, "productName": "Lentils (Dal)", "productPrice": 80, "discount": 3.0, "category": "Breakfast & Instant Food","rating":4.3,"img":indian_lentil_dahl_masoor_dal},
            {"item_id":4, "productName": "Sugar", "productPrice": 45, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":Sugar},
            {"item_id":5, "productName": "Tea Leaves", "productPrice": 200, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":green_tea_leaves},
            {"item_id":6, "productName": "Cooking Oil (Sunflower)", "productPrice": 150, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":Cooking_Oil_Sunflower},
            {"item_id":7, "productName": "Salt", "productPrice": 20, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":salt},
            {"item_id":8, "productName": "Spices (Mixed)", "productPrice": 250, "discount": 0.5, "category": "Breakfast & Instant Food","rating":4.3,"img":spices_mixed},
            {"item_id":9, "productName": "Biscuits", "productPrice": 20, "discount": 2.5, "category": "Bakery & Biscuits","rating":4.3,"img":biscuits},
            {"item_id":10, "productName": "Snacks (Namkeen)", "productPrice": 120, "discount": 0.9, "category": "Snacks & Munchies","rating":4.3,"img":Snacks_Namkeen},
            {"item_id":11, "productName": "Soft Drinks", "productPrice": 40, "discount": 4.2, "category": "Cold Drinks & Juices","rating":4.3,"img":Soft_Drinks},
            {"item_id":12, "productName": "Milk", "productPrice": 60, "discount": 1.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":milk},
            {"item_id":13, "productName": "Bread", "productPrice": 30, "discount": 3.7, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"item_id":14, "productName": "Eggs", "productPrice": 6, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"item_id":15, "productName": "Soap (Lux)", "productPrice": 25, "discount": 1.2, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"item_id":16, "productName": "Shampoo (Dove)", "productPrice": 150, "discount": 2.1, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"item_id":17, "productName": "Toothpaste (Colgate)", "productPrice": 50, "discount": 0.4, "category": "Bathroom & Toiletries","rating":4.3,"img":chips},
            {"item_id":18, "productName": "Detergent Powder", "productPrice": 80, "discount": 2.8, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"item_id":19, "productName": "Toilet Paper", "productPrice": 30, "discount": 1.6, "category": "Cleaning Supplies","rating":4.3,"img":chips},
            {"item_id":20, "productName": "Matches", "productPrice": 10, "discount": 0.3, "category": "Miscellaneous","rating":4.3,"img":chips},
            {"item_id":21, "productName": "Cooking Sauce", "productPrice": 70, "discount": 0.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"item_id":22, "productName": "Cereals", "productPrice": 90, "discount": 1.9, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":23, "productName": "Juice", "productPrice": 35, "discount": 2.4, "category": "Cold Drinks & Juices","rating":4.3,"img":chips},
            {"item_id":24, "productName": "Yogurt", "productPrice": 45, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"item_id":25, "productName": "Cheese", "productPrice": 80, "discount": 3.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"item_id":26, "productName": "Butter", "productPrice": 55, "discount": 0.6, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
            {"item_id":27, "productName": "Honey", "productPrice": 100, "discount": 1.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":28, "productName": "Jam", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":29, "productName": "Peanut Butter", "productPrice": 70, "discount": 2.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":30, "productName": "Canned Beans", "productPrice": 40, "discount": 0.9, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"item_id":31, "productName": "Tomato Sauce", "productPrice": 25, "discount": 1.2, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"item_id":32, "productName": "Pickles", "productPrice": 30, "discount": 3.1, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"item_id":33, "productName": "Raisins", "productPrice": 65, "discount": 0.4, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"item_id":34, "productName": "Almonds", "productPrice": 120, "discount": 1.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"item_id":35, "productName": "Cashews", "productPrice": 150, "discount": 2.2, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"item_id":36, "productName": "Pistachios", "productPrice": 200, "discount": 0.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"item_id":37, "productName": "Oatmeal", "productPrice": 55, "discount": 2.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":38, "productName": "Pasta", "productPrice": 40, "discount": 1.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":39, "productName": "Rice (Non-Basmati)", "productPrice": 70, "discount": 0.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":40, "productName": "Cornflakes", "productPrice": 50, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
            {"item_id":41, "productName": "Coffee", "productPrice": 250, "discount": 4.5, "category": "Beverages","rating":4.3,"img":chips},
            {"item_id":42, "productName": "Cookies", "productPrice": 30, "discount": 0.6, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"item_id":43, "productName": "Chips", "productPrice": 25, "discount": 1.7, "category": "Snacks & Munchies","rating":4.3,"img":chips},
            {"item_id":44, "productName": "Cocoa Powder", "productPrice": 80, "discount": 3.2, "category": "Bakery & Biscuits","rating":4.3,"img":chips},
            {"item_id":45, "productName": "Vinegar", "productPrice": 20, "discount": 0.5, "category": "Cooking Essentials","rating":4.3,"img":chips},
            {"item_id":46, "productName": "Mustard", "productPrice": 15, "discount": 1.9, "category": "Cooking Essentials","rating":4.3,"img":chips}
          ]        
      },
      {
        "shop_id": 2,
        "name": "Sharma Supermarket",
        "email": "sharmasupermarket@example.com",
        "phone": 9876543210,
        "address": "12A, Market Road, Gandhi Nagar, Delhi, Delhi 110001",
        "openingTime": "08:00 AM",
        "closingTime": "10:00 PM",
        "longitude": "28.6358",
        "latitude": "77.2245",
        "products": [
          {"item_id":47, "productName": "Fresh Milk", "productPrice": 55, "discount": 1.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":48, "productName": "Paneer", "productPrice": 120, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":49, "productName": "Yogurt (Plain)", "productPrice": 40, "discount": 0.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":50, "productName": "Bread (Brown)", "productPrice": 35, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":51, "productName": "Eggs (Organic)", "productPrice": 8, "discount": 0.3, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":52, "productName": "Cereals (Corn Flakes)", "productPrice": 60, "discount": 0.7, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"item_id":53, "productName": "Butter (Salted)", "productPrice": 70, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":54, "productName": "Jam (Mixed Fruit)", "productPrice": 45, "discount": 0.8, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"item_id":55, "productName": "Honey (Pure)", "productPrice": 150, "discount": 2.3, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"item_id":56, "productName": "Tea Bags (Assam)", "productPrice": 120, "discount": 1.0, "category": "Beverages","rating":4.3,"img":chips}
        ]
      },
      {
        "shop_id": 3,
        "name": "Patel Grocery Store",
        "email": "patelgrocery@example.com",
        "phone": 9876123450,
        "address": "2/4, Sardar Patel Marg, Rajaji Nagar, Bangalore, Karnataka 560010",
        "openingTime": "07:30 AM",
        "closingTime": "09:30 PM",
        "longitude": "12.9982",
        "latitude": "77.5895",
        "products": [
          {"id":3, "productName": "Rice (Sona Masoori)", "productPrice": 85, "discount": 1.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":3, "productName": "Wheat Flour (Chakki Fresh)", "productPrice": 40, "discount": 0.6, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"id":3, "productName": "Turmeric Powder", "productPrice": 30, "discount": 0.3, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Red Chilli Powder", "productPrice": 50, "discount": 0.8, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Ginger Garlic Paste", "productPrice": 35, "discount": 0.4, "category": "Spices & Condiments","rating":4.3,"img":chips},
          {"id":3, "productName": "Onions", "productPrice": 30, "discount": 0.5, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Potatoes", "productPrice": 25, "discount": 0.3, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Tomatoes", "productPrice": 40, "discount": 0.7, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Green Beans", "productPrice": 60, "discount": 1.2, "category": "Fruits & Vegetables","rating":4.3,"img":chips},
          {"id":3, "productName": "Carrots", "productPrice": 35, "discount": 0.6, "category": "Fruits & Vegetables","rating":4.3,"img":chips}
        ]
      },
      {
        "shop_id": 4,
        "name": "Singh's Fresh Mart",
        "email": "singhfreshmart@example.com",
        "phone": 9876541230,
        "address": "23, Green Avenue, Model Town, Ludhiana, Punjab 141002",
        "openingTime": "09:00 AM",
        "closingTime": "11:00 PM",
        "longitude": "30.9120",
        "latitude": "75.8533",
        "products": [
          {"item_id":57, "productName": "Fresh Milk", "productPrice": 60, "discount": 1.5, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":58, "productName": "Cheese (Cheddar)", "productPrice": 100, "discount": 2.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":59, "productName": "Butter (Salted)", "productPrice": 70, "discount": 1.0, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":60, "productName": "Eggs (Organic)", "productPrice": 10, "discount": 0.2, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":61, "productName": "Bread (Whole Wheat)", "productPrice": 40, "discount": 0.8, "category": "Dairy, Bread & Eggs","rating":4.3,"img":chips},
          {"item_id":62, "productName": "Rice (Basmati)", "productPrice": 110, "discount": 2.5, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"item_id":63, "productName": "Pulses Mix", "productPrice": 90, "discount": 2.0, "category": "Breakfast & Instant Food","rating":4.3,"img":chips},
          {"item_id":64, "productName": "Cereal Bars (Mixed Fruit)", "productPrice": 25, "discount": 0.5, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"item_id":65, "productName": "Chips (Potato)", "productPrice": 20, "discount": 0.3, "category": "Snacks & Munchies","rating":4.3,"img":chips},
          {"item_id":66, "productName": "Soft Drinks (Cola)", "productPrice": 30, "discount": 1.0, "category": "Cold Drinks & Juices","rating":4.3,"img":chips}
        ]
      }
   ]

export default shopperSampleData;