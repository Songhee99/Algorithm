function solution(phone_book) {
  phone_book.sort();

  for (i = 0; i < phone_book.length - 1; i++) {
    for (j = i + 1; j < phone_book.length; j++) {
      if (phone_book[i][0] != phone_book[j][0]) break;
      const length = phone_book[i].length;
      if (phone_book[i][length - 1] != phone_book[j][length - 1]) break;
      if (length > phone_book[j].length) break;
      if (phone_book[i] == phone_book[j].substring(0, length)) return false;
    }
  }
  return true;
}
