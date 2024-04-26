def solution(array):
    if len(array) == 1:
        return array[0]
    
    uniqueArray = list(set(array))
    
    if len(uniqueArray) == 1:
        return array[0]
    
    arrayCount = [[num, array.count(num)] for num in uniqueArray]
    arrayCount.sort(key = lambda x: x[1], reverse = True)
    
    return arrayCount[0][0] if arrayCount[0][1] != arrayCount[1][1] else -1
    
    