def fibonacci_nth(n,cache={}):
  if n == 0:
    return 0
  if n == 1:
    return 1
  if n == 2:
    return 1
  if n in cache:
    return cache[n]

  cache[n] = fibonacci_nth(n-1,cache) + fibonacci_nth(n-2,cache)
  return cache[n]



print(fibonacci_nth(1500))