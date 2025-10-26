import * as lodash from 'lodash';
import { Module } from '@nestjs/common';

export interface Paginator {
  pageList: number[];
  page: number;
  totalPage: number;
  startPage: number;
  endPage: number;
  hasPrev: boolean;
  hasNext: boolean;
  isFirstPage: boolean;
  isLastPage: boolean;
}

@Module({})
export class PaginatorModule {
  static getPaginatory(
    totalCount: number,
    page: number,
    perPage: number,
  ): Paginator {
    const PER_PAGE = perPage || 10; // 한 페이지에 노출될 게시글 개수
    const totalPage = Math.ceil(totalCount / PER_PAGE); // 총 페이지 수

    let quotient = page / PER_PAGE; // 현재 페이지 번호를 한 페이지에 노출될 게시글 개수로 나눈 몫
    if (page % PER_PAGE === 0) {
      // 현재 페이지 번호를 한 페이지에 노출될 게시글 개수로 나눈 나머지가 0인 경우
      quotient -= 1;
    }

    // 시작 페이지 번호와 종료 페이지 번호 계산
    const startPage = quotient * PER_PAGE + 1;
    const endPage =
      startPage + PER_PAGE - 1 < totalPage
        ? startPage + PER_PAGE - 1
        : totalPage;

    const isFirstPage = page === 1; // 첫 페이지 여부
    const isLastPage = page === totalPage; // 마지막 페이지 여부
    const hasPrev = page > 1; // 이전 페이지 존재 여부
    const hasNext = page < totalPage; // 다음 페이지 존재 여부

    // 페이지네이션 정보 객체 생성
    const paginator = {
      pageList: lodash.range(1, endPage + 1),
      page: page,
      nextPage: page + 1,
      prevPage: page - 1,
      totalPage: totalPage,
      startPage: startPage,
      endPage: endPage,
      hasPrev: hasPrev,
      hasNext: hasNext,
      isFirstPage: isFirstPage,
      isLastPage: isLastPage,
    } as Paginator;

    return paginator;
  }
}
