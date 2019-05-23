#CodeAcademy Welcome to Ruby script
print "What's your first name? "
first_name = gets.chomp
first_name.capitalize!

print "What's your last name? "
last_name = gets.chomp
last_name.capitalize!


print "What city are you from? "
city = gets.chomp
words = city.split(" ")
for word in words
  word.capitalize!
end
city = words.join(" ")
print "What state are you from? (Ex: CA or NY) "
state = gets.chomp
state.upcase!


puts "#{first_name} #{last_name} lives in #{city}, #{state }"