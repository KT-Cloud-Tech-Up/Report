const paginatorUtil = require("../utils/paginator");
import mongoClient from "../config/db.js";

// mongodb 데이터 베이스 모듈 호출
const getMongoClient = await mongoClient();
// postdb 데이터 베이스의 post 컬렉션 추출
let collection = getMongoClient.db("postdb").collection("post");

async function writePost(post) {
  console.log("저장할 데이터:", post);

  // 게시글 데이터 구성
  const newPost = {
    title: post.title,
    writer: post.writer,
    password: post.password,
    content: post.content,
    hits: 0,
    createdAt: new Date().toISOString(),
  };

  console.log("MongoDB에 저장:", newPost);
  return await collection.insertOne(newPost);
}

// home 페이지에 노출될 게시글 목록 리스트 호출 service
async function list(page, search) {
  const perPage = 10; // 한 페이지에 노출될 게시글 개수
  const query = { title: new RegExp(search, "i") }; // 검색어 쿼리 스트링으로 검색 조건 설정 (정규식과 "i" 옵션을 통해 해당 검색어를 포함하면 검색될 수 있도록 처리)
  // 넘겨받은 데이터 베이스 테이블 collection에 query문과 추가 조회 조건들을 넣어 정렬 추출
  const cursor = collection
    .find(query, { limit: perPage, skip: (page - 1) * perPage })
    .sort({ createdAt: -1 });
  const totalCount = await collection.count(query); // 검색 조건에 맞는 게시글 총 개수 추출
  const posts = await cursor.toArray(); // 검색 조건에 맞는 게시글 목록을 toArray() 메서드를 통해 배열 형태로 추출
  const paginator = paginatorUtil(totalCount, page, perPage); // 페이지네이션 유틸리티 함수를 통해 페이지네이션 정보 추출

  return [posts, paginator];
}

module.exports = {
  writePost,
  list,
};
