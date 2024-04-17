function solution(genres, plays) {
  const totalNumMap = new Map();
  const infoMap = new Map();
  const result = [];

  genres.forEach((ele, idx) => {
    if (totalNumMap.has(ele)) {
      totalNumMap.set(ele, totalNumMap.get(ele) + plays[idx]);
      infoMap.get(ele).push([plays[idx], idx]);
    } else {
      totalNumMap.set(ele, plays[idx]);
      infoMap.set(ele, [[plays[idx], idx]]);
    }
  });

  const totalNumArr = [...totalNumMap].sort((a, b) => b[1] - a[1]);
  totalNumArr.forEach((ele) => {
    const [genre, plays] = ele;
    const musics = [...infoMap.get(genre)].sort((a, b) => b[0] - a[0]);
    let idx = 0;
    while (idx < 2) {
      if (musics[idx] === undefined) break;
      result.push(musics[idx][1]);
      idx++;
    }
  });

  return result;
}
