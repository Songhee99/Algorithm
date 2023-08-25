function solution(array, commands) {
  let result = [];
  for (i = 0; i < commands.length; i++) {
    result.push(
      array
        .slice(commands[i][0] - 1, commands[i][1])
        .sort((a, b) => a - b)
        .splice(commands[i][2] - 1, 1)
    );
  }

  return result.flat(1);
}
