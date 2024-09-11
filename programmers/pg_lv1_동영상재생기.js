function solution(video_len, pos, op_start, op_end, commands) {
  const totalLen = video_len.split(":").reduce((acc, cur) => +acc * 60 + +cur);
  let curPos = pos.split(":").reduce((acc, cur) => +acc * 60 + +cur);
  const OpStart = op_start.split(":").reduce((acc, cur) => +acc * 60 + +cur);
  const OpEnd = op_end.split(":").reduce((acc, cur) => +acc * 60 + +cur);

  commands.forEach((ele) => {
    if (curPos >= OpStart && curPos < OpEnd) curPos = OpEnd;

    if (ele == "prev") {
      curPos -= 10;
      if (curPos < 0) curPos = 0;
    } else if (ele == "next") {
      curPos += 10;
      if (curPos > totalLen) curPos = totalLen;
    }

    if (curPos >= OpStart && curPos < OpEnd) curPos = OpEnd;
  });
  const finalMin = parseInt(curPos / 60)
    .toString()
    .padStart(2, 0);
  const finalSec = (curPos % 60).toString().padStart(2, 0);

  return finalMin + ":" + finalSec;
}
