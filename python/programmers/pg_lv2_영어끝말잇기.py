def solution(n, words):
    wordsSet = set()    
    
    for (idx, i) in enumerate(words):
        if idx == 0 or (i not in wordsSet and words[idx - 1][-1] == words[idx][0]): wordsSet.add(i)
        else:
            num = idx % n + 1
            turn = idx // n + 1
            return [num, turn]
    return [0,0]