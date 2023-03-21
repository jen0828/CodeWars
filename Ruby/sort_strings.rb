# https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

# kata(6kyu)
# Sort the given array of strings in alphabetical order, case insensitive. For example:
#   ["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
#   ["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
  

# My solution:

def sort_strings(strings)
  strings.map do | x | x.to_s
    end.sort_by( &: downcase)
end