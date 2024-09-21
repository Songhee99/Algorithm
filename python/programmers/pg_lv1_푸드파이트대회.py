def solution(food):
    result = ""
    for (idx, i) in enumerate(food):
        if idx == 0: continue
        count = i // 2
        result += str(idx) * count
    
    return result + "0" + result[::-1]