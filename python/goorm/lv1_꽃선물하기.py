# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

flowers = ["Sunflower", "Tulip", "Rose"]
result = []
n = int(sys.stdin.readline())
for i in range(n):
	a, b = map(int, sys.stdin.readline().split())
	if a < b: result.append(flowers[0])
	elif a == b: result.append(flowers[1])	
	else: result.append(flowers[2])
	
print("\n".join(result))