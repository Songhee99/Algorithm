def solution(my_string):
    moum = ["a", "e", "i", "o", "u"]
    
    for i in moum:
        my_string = my_string.replace(i, "", my_string.count(i))
        
    return my_string