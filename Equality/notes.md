# Equality in Javascript  

- Js has 2 types of equality.
  1. Loose equality 
  2. Strict equality

# Loose Equality ( Abstract Equality Comparison )

- This operator does type coercion befoer comparing.

## Example 1

```
5 == "5"        // true
```
- Here js converts "5" -> 5 so it becomes 5 == 5 . 
- Then compares 5 == 5 

## Example 2

```
false == 0 // true
```

- Here js converts false -> 0 it becomes 0 == 0.
- Then compares 0 == 0.

# A CRAZY QUESTION !!!! WHY ?

- Why js coverted "5" --> 5 . Why not 5 --> to "5" and then compare like this "5" == "5".
- Why js coverted false --> 0 . But why not 0 --> false and then compare like this false == false.
- What exact rules does == follow internally ?

# The Real Answer Is : Abstract Equality Algorithm

- Js does not randomly decides type coercions.
- Js runs a spec-defined alogorithm called `Abstract Equality Algorithm`.

## Rule 1

- If both values have same type . js compares normally no type conversion.

## Rule 2 

- If both values are of different type . it follows priority based conversion rule.
 
  ## If One Is Number and Another is String 

  - Js converts string to number 

```
"5" == 5 
```
- Step-by-step-internally :
- Types are different Number and String.
- Algo says if one is number and one is string convert the string to number .
- So "5" becomes 5 . then it compares 5 == 5 will be true.

# Why Not Convert Number To String ?

- Because the spec designeres choose number as the dominant primitive in numeric comparisions .
- The rule literally says if Type(x) is string and Type(y) is Number convert string to number .
- So it always converts the string.


## If One Is Boolean ?

- Boolean always converts to Number.

```
false == 0
```

- Types → Boolean & Number
- Rule says if one is Booelan convert it to number .
- Sp false becomes 0 
- Then it will compare 0 == 0 rsulting in true.

## null and undefined (Special Case) ?

```
null == undefined 
```
- Null and undefined are only equal to each other.


# Object compared with Primitive ?

```
[] == false 
```
- Types Object & Primitive.
- Here one is boolean and we already know if one side is `boolean` it will get converted to `number.
- Now it became [] == 0.
- Now we ahve another rule if one side is Obj and other is primitive . Convert the obj to primitve first.
- So according to rule it will convert obj to primitive by usign valueof and toString() methods and become "" == 0.
- Now they are "" == 0 . and we know if one is string and other is number . string will get converted to number .
- So 0 ==0 which resulting in true.




# Strict Equality 

- === is called strcut equality comparison.
- It compares 2 things type and value.
- It does NO type coercion . This is the biggest difference between == and ===.

## Core Rule of === is

- If types oare diff return false , No coercion No magic.

```
5 === "5"      // false

false === 0    // false

null === undefined   // false
```

- If types are same it does normal conversion.

```
null === null  //false
,,,

- even though type are same y null === null is false.
- Because in js Nan is not equal to anything , even itself .
- This is part of IEEE 754 floating point rules.