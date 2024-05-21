result = []

for t in range(1, 11):
    n = input()
    findStr = input()
    target = input()

    res = target.count(findStr)

    result.append(f"#{t} {res}")
print("\n".join(result))