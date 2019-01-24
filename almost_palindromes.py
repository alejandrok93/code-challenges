def palindromes(str):
  errors = 0
  end = 1
  for i in range(0,len(str)):
    print(str[i], str[-end])
    if str[i] is not str[-end]:
      errors = errors + 1
    end = end + 1
  return errors

print(palindromes('radar'))
