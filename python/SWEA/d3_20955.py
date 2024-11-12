T = int(input())
result = []

for t in range(T):
    s = [i for i in input()]
    e = [i for i in input()]

    while len(e) != len(s):
        if e[-1] == "X": e.pop()
        else:
            e.pop()
            e.reverse()

    result.append(f'#{t + 1} {"Yes" if s == e else "No"}')

print("\n".join(result))