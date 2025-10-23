const express = require("express"); // Express 모듈 임포트
const mongodb = require("./config/db"); // MongoDB 연결 모듈 임포트
const handlebars = require("express-handlebars"); // 템플릿 엔진 모듈 임포트
const postService = require("./services/post-service"); // 게시글 관련 서비스 모듈 임포트
const dotenv = require("dotenv"); // .env 파일 사용 활성화 (환경변수 관리)
const postRoutes = require("./routes/post.routes"); // 게시글 관련 라우트 모듈 임포트

// .env 파일 로드
dotenv.config();
// connectDB();

const app = express();

// handlebars 템플릿 엔진 설정
// app.engine("handlebars", handlebars.engine());
app.engine(
  "handlebars",
  handlebars.create({
    helpers: require("./config/handlebars-helpers"),
  }).engine
); // Handlebars 템플릿 엔진 설정 (커스텀 헬퍼 함수 사용)
app.set("view engine", "handlebars"); // Handlebars 템플릿 엔진 설정 (뷰 엔진 설정)
app.set("views", __dirname + "/views"); // 뷰 파일 경로 설정

// 정적 파일 제공
app.use(express.static("public"));

// Body parser 미들웨어 (반드시 라우트보다 먼저!)
app.use(express.json()); // JSON 요청 처리 가능하게끔 설정
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 처리 가능하게끔 설정

// home 페이지 렌더링
// app.get("/", (req, res) => {
//   res.render("home", { title: "게시판" });
// });

// 몽고 DB 테이블 컬렉션(post 테이블) 변수
let collection;

// 서버 실행
app.listen(3000, async () => {
  console.log("Server is running on port 3000");
  const mongoClient = await mongodb(); // mongodb 데이터 베이스 모듈 호출
  collection = mongoClient.db("postdb").collection("post"); // postdb 데이터 베이스의 post 컬렉션 추출
  console.log("Connected to MongoDB");
});

// 루트 경로 home 페이지 이동 라우팅 처리
// app.get("/", async (req, res) => {
//   const page = parseInt(req.query.page) || 1; // 페이지 번호 추출
//   const search = req.query.search || ""; // 검색어 추출

//   try {
//     // 게시글 목록 조회 (테이블 collection, 페이지 번호, 검색어)
//     const [posts, paginator] = await postService.list(collection, page, search);
//     console.log(posts);
//     // 가져온 게시글 목록을 home 페이지로 라우팅 렌더링
//     // home 페이지를 라우팅 렌더링할 때 title, search, paginator, posts 데이터들을 같이 전달
//     // 여기서 처음에 express에 handlebars 템플릿 엔진을 쓰게끔 적용하고 views 뷰 파일 경로를 /views 로 지정하였으므로
//     // views 경로의 home.handlebars 뷰 파일에서 각 데이터들을 사용할 수 있게끔 처리하였음
//     res.render("home", { title: "게시판", search, paginator, posts });
//   } catch (error) {
//     console.error(error);
//     res.render("home", { title: "게시판 리스트를 불러오는 데 실패했습니다." });
//   }
// });

app.get("/write", (req, res) => {
  res.render("write", { title: "게시판 작성" });
});

app.post("/write", async (req, res) => {
  console.log("받은 데이터:", req.body);

  // req.body가 비어있는지 확인
  if (!req.body || Object.keys(req.body).length === 0) {
    console.error("req.body가 비어있습니다!");
    return res.status(400).send("데이터가 전송되지 않았습니다.");
  }

  const result = await postService.writePost(collection, req.body);
  res.redirect(`/detail/${result.insertedId}`);
});

app.get("/detail/:id", (req, res) => {
  res.render("detail", { title: "게시판 상세" });
});

// api + 렌더링 형태로 라우팅 설정
app.use("/api/v1/posts", postRoutes);
