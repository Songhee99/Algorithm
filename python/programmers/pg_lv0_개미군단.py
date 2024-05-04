def solution(hp):
    ants = [5, 3, 1]
    count = 0
    
    for i in ants:
        count += hp // i
        hp = hp % i 
        if hp % i == 0: break
        
    return count
    