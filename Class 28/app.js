// let a =10;

// const result = a === 10 ? 10 : 5

// console.log(result, "result")

// const interpolation = `My favorite number is ${result}`

// console.log(interpolation)

//
// const x = 10;
// const y = 12;

// const obj = {
//     x,
//     y
// }

// console.log(obj)

//
// const quux = () => Math.random()

// var obj = {
//     foo: "bar"
// };

// obj["baz"] = 42;

// obj["baz" + quux()] = 42;

// console.log(obj)

//
// const obj ={
//     func(){
//         console.log("Function from obj")
//     }
// }

// obj.func()

//
// const arr = [1,3,4]

// const[a, , c] = arr

// console.log(`a is ${a} b is 'undefined' c is ${c}`)

// var arr = [1,3,4]

// var[a, b, c] = arr

// const re = [b, a] = [a, b]

// console.log(`a is ${a} b is ${b} c is ${c}`)

//
// const obj = {
//     name: "sabih",
//     company: "saylani"
// }

// const {name, company} = obj

// console.log(name, company)

//
// const obj = {
//     name: "sabih",
//     company: "saylani",
//     hobby: { isPlaying: true}
// }

// const {company, hobby: {isPlaying}} = obj

// console.log(isPlaying, company)

//
// var list = [ 1, 2, 6 ]

// var [ x, y, z =4] = list

// console.log(`x is ${x} y is ${y} z is ${z}`)

// var obj = { a: 1, b: 12 }

// var { a, b} = obj

// console.log(`a is ${a} b is ${b}`)

//
// const func = item => console.log(item)

// var list = [ 1, 2, 6 ]

// func(list)

var obj = {a: 1, b: 12}

const func = ({b: number1, a: number2}) => {
    console.log(number1, number2)
}

func(obj)