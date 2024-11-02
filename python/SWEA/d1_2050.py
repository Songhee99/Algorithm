n = input()
result = []

for i in n:
    result.append(str(ord(i) - 64))

print(" ".join(result))