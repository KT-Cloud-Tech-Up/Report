import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "제목은 필수입니다."],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "내용은 필수입니다."],
    },
    author: {
      type: String,
      default: "익명",
    },
  },
  {
    timestamps: true, // createdAt, updatedAt 자동 생성
  }
);

export default mongoose.model("Post", postSchema);

// MongoDB 테이블 생성 및 바로 사용
// use testdb

// 데이터 삽입
// 접속한 db 안의 users라는 테이블 생성 후 데이터 삽입
// db.users.insertOne({name:"sehun", age:30})
// db.users.insertMany([{name: "사람1", age: 16, gender: "M"}, {name: "사람2", age: 20, gender: "F"}, {name: "사람3", age: 50, gender: "M"}])

// 데이터 수정
// db.users.updateOne({name: "sehun"}, {$set: {age:29}}) - name이 sehun인 데이터의 age를 29로 수정
// db.users.updateMany({age: {$gte: 20}}, {$set: {status: "veteran"}}) - age가 20보다 크거나 같은 데이터의 status를 veteran로 수정 혹은 추가
// db.users.updateOne({name: "mina"}, {$unset: {gender: ""}}) - name이 mina인 데이터의 gender 필드 삭제

// 데이터 삭제
// db.users.deleteOne({name: "sehun"}) - name이 sehun인 데이터 삭제
// db.users.deleteMany({age: {$gte: 20}}) - age가 20보다 크거나 같은 데이터 삭제

// 접속한 db 안의 users라는 테이블의 모든 데이터 조회
// db.users.find()

// 접속한 db 안의 users라는 테이블의 특정 조건의 데이터 조회
// db.users.find({age: {$gt: 25}}) - age가 25보다 큰 데이터 조회
// db.users.find({email : /example/}) - email이 example을 포함하는 데이터 조회
// db.users.find({age: {$gte: 20}}) - age가 20보다 크거나 같은 데이터 조회
// db.users.find({}, {name:1, email:1, _id:0 }) - name, email 필드만 조회

// 접속한 db 안의 users라는 테이블에 다수 데이터 한번에 삽입
// db.users.insertMany([{name: "mina", age:14, email:"mina@example.com"}, {name: "dihyung", age:20, email: "dohyung@example.com"}])

// 접속한 db 안의 users라는 테이블의 데이터 정렬 조회
// 내림차순 : db.users.find().sort({age:-1})
// 오름차순 : db.users.find().sort({age: 1})

// 접속한 db 안의 users라는 테이블의 데이터 갯수를 제한하여 조회
// db.users.find().sort({age:1}).limit(1)
