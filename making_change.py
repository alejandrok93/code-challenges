def making_change(amount, denominations, index=0, cache={}):
  if amount == 0:
    return 1
  
  if amount < 0:
    return 0

  if index >= len(denominations):
    return 0 

  if amount in cache:
    print('found the key!', amount)
    return cache[amount]  

  ways = 0
  amount_with_coin = 0
  while amount_with_coin <= amount:
    remaining = amount - amount_with_coin
    ways = ways + making_change(remaining, denominations, index+1, cache)
    amount_with_coin = amount_with_coin + denominations[index]
  
  
  print(cache)
  cache[amount] = ways

  return cache[amount]





denominations = [1, 5, 10, 25, 50]
print(making_change(10, denominations))


  