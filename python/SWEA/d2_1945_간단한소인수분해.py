t = int(input())
for k in range(1, t+1):
    n = int(input())
    dividedNum = [2, 3, 5, 7, 11]
    result = []

    for i in dividedNum:
        count = 0
        while n % i == 0:
            count += 1
            n //= i
        result.append(count)

    print(f"#{k}", " ".join(list(map(str, result))))
