def solution(cipher, code):
    return "".join([i for idx, i in enumerate(cipher) if (idx + 1) % code == 0])