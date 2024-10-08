def solution(phone_book):
    n = len(phone_book)
    phone_book.sort(key = lambda x: (x, len(x)))
    
    for (idx, i) in enumerate(phone_book[:n - 1]):
        if i == phone_book[idx + 1][:len(i)]: return False
    
    return True