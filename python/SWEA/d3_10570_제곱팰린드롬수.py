from math import sqrt

T = int(input())
result = []

for t in range(1, T + 1):
    a, b = map(int, input().split())
    count = 0

    for i in range(a, b+1):
        if len(str(i)) == 1:
            if len(str("%g" % (sqrt(i)))) == 1: count += 1
            continue

        def sameFunc(i):
            i = str(i)
            for j in range(len(i) // 2):
                if i[j] != i[-(j + 1)]:
                    return False
            return True

        sameCurNum = sameFunc(i)
        if sameCurNum:
            sqrtNum = sameFunc("%g" % (sqrt(i)))
            if sqrtNum: count += 1

    result.append(f"#{t} {count}")
print("\n".join(result))