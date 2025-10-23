// MongoDB 연결 모듈 import
const { MongoClient } = require("mongodb");

// 로컬 mongodb 서버 주소
const url = "mongodb://localhost:27017";

// mongodb 데이터 베이스 모듈 추출
module.exports = function (callback) {
  return MongoClient.connect(url, callback);
};

// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB Connection Failed:", error.message);
//     process.exit(1);
//   }
// };
