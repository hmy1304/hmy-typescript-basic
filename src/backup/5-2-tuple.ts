

const getPersonInfo=():[string, number]=>{

    return ["Bob", 25]
}

let person1: [string, number] = getPersonInfo()


console.log(`Name : ${person1[0]}, Age : ${person1[1]}`)