def solution(arr):
    if len(arr) == 1: return [-1]
    minNumIdx = arr.index(min(arr))
    return arr[:minNumIdx] + arr[minNumIdx + 1:]
    