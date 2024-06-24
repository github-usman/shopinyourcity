import dotenv from "dotenv";
dotenv.config({path:'.env'});


const mongoDB = {
    mongoURI: process.env.MONGODB_URI,
    dbName: process.env.DB_NAME,
  };

// server port and mode
const server = {
    serverPort: process.env.SERVER_PORT,
    serverMode: process.env.SERVER_MODE,
};



// Export variables
export const { serverMode, serverPort } = server;
export const { mongoURI, dbName } = mongoDB;