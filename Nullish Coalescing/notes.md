# Nullish Coalescing 

- Nullish Coalescing is an operator .
- It returns the right side only if the leftside is null or undefined.

## Basuc Syntax 

```
value ?? defaultValue
```
- this means if value is undefined or null use defaultValue or use value.

## Example 1

```
let name = null;

console.log(name ?? "Guest");

output : Guest
```

## Example 2

```
let count = 0;

console.log(count ?? 10);

output: 0
```


