T = int(input())
result = []

for t in range(1, T + 1):
    n, k = map(int, input().split())
    kList = set(list(map(int, input().split())))
    numList = [i for i in range(1, n+1)]

    notKList = [i for i in numList if i not in kList]
    
    notkStr = " ".join(map(str, notKList))
    result.append(f"#{t} {notkStr}")
print("\n".join(result))