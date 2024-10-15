def solution(s):
    sList = list(s)
    stack = []
    
    for i in sList:
        if len(stack) == 0 or stack[-1] != i: stack.append(i)
        else: stack.pop()

    return 0 if len(stack) else 1      