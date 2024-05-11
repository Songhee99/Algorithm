def solution(array, commands):
    result = []
    
    for i, j, k in commands:
        newArr = sorted(array[i-1:j])
        result.append(newArr[k-1])
        
    return result