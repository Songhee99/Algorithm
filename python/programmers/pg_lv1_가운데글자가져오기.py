def solution(s):
    center = len(s) // 2
    return s[center-1:center+1] if len(s) % 2 == 0 else s[center]