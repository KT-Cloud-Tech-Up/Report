// Handlebars 커스텀 헬퍼 함수 정의
module.exports = {
  lengthOfList: (list = []) => list.length,
  eq: (val1, val2) => val1 === val2,
  dateString: (isoString) => new Date(isoString).toLocaleString(),
};
