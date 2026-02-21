# Regex In JavaScript ?

- Regex is a regular expression whch is used to match text.
- It is a powerfull skill , especially used in forms , search , validations and parsing etc.
- In simpler way regex is a way to match , validate or search text using patterns.
- By default, regex is case sensitive.

# Example 

- Suppose you want to validate an email ,check if an phone number is valid or not  , remove extra spaces , 
- regex helps you to do all the things.

# How Regex Is Written In Js ?

- There are 2 ways 
 1. Literal syntax : `const pattern = /hello/`
 2. Constructor syntax : `const pattern = new RegExp("hello")`

 # Important Regex Methods in JS

  1. test() : returns true or false `/hello/.test("hello world") // true`
  2. match() : returns matched value `"hello world".match(/world/)`
  3. replace() : replaces the word `"hello world".replace(/world/, "Nagaraj")`