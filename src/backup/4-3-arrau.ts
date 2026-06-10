const filterFruits = (fruits:string[]):string[] => {
    return fruits.filter(fruit=>fruit.startsWith("b"))
}

let fruitList : string[] = ["apple", "banana", "blueberry", "cherry"]

console.log(`B로 시작하는 과일 ${filterFruits(fruitList)}`)