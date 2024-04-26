def solution(n):
    evenList = [num for num in range(n + 1) if num % 2 == 0]
    return sum(evenList)