const lodash = require("lodash"); // lodash 모듈 임포트
const PAGE_PER_SIZE = 10; // 한 페이지에 노출될 게시글 개수

// 페이지네이션 유틸리티 함수
module.exports = ({ totalCount, page, perPage }) => {
  const PER_PAGE = perPage || 10; // 한 페이지에 노출될 게시글 개수
  const totalPage = Math.ceil(totalCount / PER_PAGE); // 총 페이지 수

  let quotient = parseInt(page / PAGE_PER_SIZE); // 현재 페이지 번호를 한 페이지에 노출될 게시글 개수로 나눈 몫
  if (page % PAGE_PER_SIZE === 0) {
    // 현재 페이지 번호를 한 페이지에 노출될 게시글 개수로 나눈 나머지가 0인 경우
    quotient -= 1;
  }

  // 시작 페이지 번호와 종료 페이지 번호 계산
  startPage = quotient * PAGE_PER_SIZE + 1;
  endPage =
    startPage + PAGE_PER_SIZE - 1 < totalPage
      ? startPage + PAGE_PER_SIZE - 1
      : totalPage;

  const isFirstPage = page === 1; // 첫 페이지 여부
  const isLastPage = page === totalPage; // 마지막 페이지 여부
  const hasPrev = page > 1; // 이전 페이지 존재 여부
  const hasNext = page < totalPage; // 다음 페이지 존재 여부

  // 페이지네이션 정보 객체 생성
  const paginator = {
    pageList: lodash.range(startPage, endPage + 1),
    page: page,
    totalPage: totalPage,
    startPage: startPage,
    endPage: endPage,
    hasPrev: hasPrev,
    hasNext: hasNext,
    isFirstPage: isFirstPage,
    isLastPage: isLastPage,
  };

  return paginator;
};
