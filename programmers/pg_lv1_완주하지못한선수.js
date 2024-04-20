function solution(participant, completion) {
  const participantMap = new Map();
  const completionMap = new Map();

  participant.forEach((ele) => {
    if (!participantMap.has(ele)) participantMap.set(ele, 1);
    else participantMap.set(ele, participantMap.get(ele) + 1);
  });

  completion.forEach((ele) => {
    if (!completionMap.has(ele)) completionMap.set(ele, 1);
    else completionMap.set(ele, completionMap.get(ele) + 1);
  });

  if (participantMap.size === completionMap.size) {
    for (ele of [...participantMap]) {
      if (ele[1] > 1) {
        if (ele[1] != completionMap.get(ele[0])) return ele[0];
      }
    }
  }

  for (ele of [...participantMap]) {
    if (!completionMap.has(ele[0])) return ele[0];
  }
}
