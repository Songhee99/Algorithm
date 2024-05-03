def solution(array, height):
    array.sort()
    
    smallPerson = 0
    for i in array:
        if i > height: break
        smallPerson += 1
        
    return len(array) - smallPerson
            