def solution(lottos, win_nums):
    ranking = [6,6,5,4,3,2,1]
    winSet = set(win_nums)
    
    for i in lottos:
        if i in winSet: winSet.remove(i)
        
    already = 6 - len(winSet)
    zeroCount = lottos.count(0)
    
    return [ranking[already + zeroCount], ranking[already]]
    
    