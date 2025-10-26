import hbs from 'hbs';

export function HandlebarsHelperModule() {
  // handlebars에 넘겨진 데이터 중 날짜 데이터를 LocaleDateString으로 변환하기 위한 helper
  hbs.registerHelper('dateString', (date: Date) => date.toLocaleString());

  // handlebars에 넘겨진 리스트 데이터들의 사이즈를 구하기 위한 helper
  hbs.registerHelper('lengthOfList', (list = []) => list.length);

  // handlebars에 넘겨진 데이터들을 비교하기 위한 helper
  hbs.registerHelper('eq', (val1, val2) => val1 === val2);
}
