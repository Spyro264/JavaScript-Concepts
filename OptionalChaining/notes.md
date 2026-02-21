# What is Optional Chaining ?

- Optional Chaining allows you to safely access the nested properties of an object . without throwing an error if something is null or undefined.
- Instead of crashing it . it returns undefined 

# The Problem Before Optional Chaining

```
const user = {
  profile: {
    name: "Nagaraj"
  }
};
```

- Accessing : user.profile.name // Nagaraj
- What if user is null user=null.
- and now u try to acces it user.profile.name results in error saying `Cannot read properties of null`.

# Old Way (Before ES2020)
- we had to write `user && user.profile && user.profile.name`. looks very ugly and more code 

# Modern Way: Optional Chaining

- user?.profile?.name
- If user is null or undefined → js stops and returns undefined No crash.

# Optional Chaining With Functions

```
const user = {
  greet() {
    return "Hello";
  }
};

user.greet?.()
```
- if greeet exist call it or else returns undefined.
