import axios from 'axios';

const headers = {
    'X-Naver-Client-Id' : 'OlzrFYoPy_eBbrzX7kVz',
    'X-Naver-Client-Secret' : 'deSaeUt4Rk'
}

export async function getMovieInfo(moviename: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정 할 수 있습니다.
  const response = await axios.get<MovieInfo>(
    `https://openapi.naver.com/v1/search/movie.json?query=${moviename}`, {headers}
  );
  return response.data; // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface MovieInfo {
lastBuildDate: string,
total: number,
start: number,
display: number,
items: {
    title: string,
    link: string,
    image: string,
    subtitle: string,
    pubDate: string,
    actor: string,
    userRating: string
}
}