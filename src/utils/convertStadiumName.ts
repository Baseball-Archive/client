const stadiumNameMap: { [key: string]: string } = {
  고척: '고척스카이돔',
  광주: '광주기아챔피언스필드',
  대구: '대구삼성라이온즈파크',
  대전: '한화생명이글스파크',
  문학: '인천SSG랜더스필드',
  사직: '사직야구장',
  수원: '수원KT위즈파크',
  울산: '울산문수야구장',
  '이천(두산)': '이천베어스파크',
  잠실: '잠실야구장',
  창원: '창원NC파크',
  청주: '청주야구장',
  포항: '포항야구장',
};
export const convertStadiumName = (name: string): string => {
  return stadiumNameMap[name] || name;
};
