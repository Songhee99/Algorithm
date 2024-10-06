def solution(arr):
    result = []
    stack = []
    
    for i in arr:
        if len(stack) == 0 or stack.pop() != i: result.append(i)
        stack.append(i)

    return result