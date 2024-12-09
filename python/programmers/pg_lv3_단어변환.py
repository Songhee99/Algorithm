from collections import deque

def solution(begin, target, words):
    if target not in words: return 0
    
    n = len(begin)
    visitedSet = set()

    def checkDifference(prevWord, nextWord):
        count = 0
        for i in range(n):
            if prevWord[i] != nextWord[i]: count += 1
        return True if count == 1 else False
    
    def bfs(begin):
        queue = deque([(begin, 0)])
        visitedSet.add(begin)
        
        while queue:
            curWord, count = queue.popleft()

            if curWord == target: return count
            
            for word in words:
                if word not in visitedSet and checkDifference(curWord, word):
                    queue.append((word, count + 1))
        return 0
    
    return bfs(begin)