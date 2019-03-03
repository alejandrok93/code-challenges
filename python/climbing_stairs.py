def climibing_stairs(n):
  if n == 0:
    return 1
  if n == 1:
    return 1
  if n == 2:
    return 2
  if n == 3:
    return 4
  return climibing_stairs(n-1) + climibing_stairs(n-2) + climibing_stairs(n-3)


print(climibing_stairs(5))