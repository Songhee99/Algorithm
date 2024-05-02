def solution(my_string):
    result = 0
    for i in range(10):
        result += i * my_string.count(str(i))
        
    return result