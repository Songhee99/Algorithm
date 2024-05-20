result = []

for t in range(1, 11):
    cryptogram = int(input())
    origin = list(input().split())
    commandNum = int(input())
    commands = list(input().split())

    idx = 0

    while idx < len(commands):
        if commands[idx] == "I":
            x = int(commands[idx + 1])
            y = int(commands[idx + 2])
            for i in range(y):
                str = commands[idx + 3 + i]
                origin.insert(x + i, str)
            idx += 3 + y
        elif commands[idx] == "D":
            x = int(commands[idx + 1])
            y = int(commands[idx + 2])
            for i in range(y):
                del origin[x]
            idx += 3
        else:
            y = int(commands[idx + 1])
            for i in range(y):
                str = commands[idx + 2 + i]
                origin.append(str)
            idx += 2 + y

    tens = " ".join(origin[:10])
    result.append(f"#{t} {tens}")
print("\n".join(result))