def solution(numbers):
    if len(numbers) == 1: return str(numbers[0])

    numbers = list(map(str, numbers))
    numbers.sort(key = lambda x: x*3, reverse = True)
    
    return str(int("".join(numbers)))  