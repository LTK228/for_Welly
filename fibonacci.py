def fibonacci(position):
    if position == 0:
        return 0
    elif position == 1:
        return 1
    else:
        return fibonacci(position - 1) + fibonacci(position - 2)


print(fibonacci(0))  # 0
print(fibonacci(1))  # 1
print(fibonacci(2))  # 1
print(fibonacci(3))  # 2
print(fibonacci(4))  # 3
