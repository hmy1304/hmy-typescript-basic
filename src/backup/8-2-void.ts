// const printFruits=(fruits:string[]):void=>{
//     fruits.forEach(fruit=>{
//         console.log(`🍎 ${fruit}`)
//     })
// }
const printNewFruits=(fruits:string[]):void=>{
    fruits.map(fruit=>{
        console.log(`🍎 ${fruit}`)
    })
}

printNewFruits(["사과", "바나나", "오렌지"])