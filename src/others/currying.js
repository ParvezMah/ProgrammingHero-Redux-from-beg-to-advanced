// Currying : A Pattern of functional programming paradigm

// Normal function
// const add = (a, b, c)=>{
//     return a + b + c;
// }

// const result = add(1, 2, 3); //* add()()()
// console.log(result)

const add = (a)=>{
    return (b)=>{
        return (c)=>{
            return a + b + c;
        }
    }
}

// const result = add(1)(2)(3); //* add()()()
// console.log(result)

const level = add(1);
const result = level(2)(3);
console.log(level)
console.log(result)