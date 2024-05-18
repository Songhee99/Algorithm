T = int(input())
result = []
moeums = ["a", "e", "i", "o", "u"]

for t in range(1, T + 1):
    word = input()

    for i in moeums:
        word = word.replace(i, "")

    result.append(f"#{t} {word}")
print("\n".join(result))