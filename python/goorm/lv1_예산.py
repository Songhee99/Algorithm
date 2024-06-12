
# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

n, m = map(int, sys.stdin.readline().split())
totalSum = 0
over = False

for i in range(n):
	price, num = map(int, sys.stdin.readline().split())
	totalSum += price * num
	if totalSum > m: 
		over = True
		break
	
print("No") if over == True else print(f"{m - totalSum}")