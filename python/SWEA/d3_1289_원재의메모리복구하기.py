T = int(input())
result = []

for t in range(1, T + 1):
    n = input()
    curState = True  # 0 = True // 1 = False
    count = 0

    for i in n:
        numState = True if i == "0" else False

        if numState != curState:
            curState = not curState
            count += 1

    result.append(f"#{t} {count}")
print("\n".join(result))