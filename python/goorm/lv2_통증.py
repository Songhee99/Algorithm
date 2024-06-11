# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
import sys

n = int(sys.stdin.readline())

result = n // 14
n = n % 14

if n >= 7:
	result += n // 7
	result += n % 7
else: result += n

print(result)