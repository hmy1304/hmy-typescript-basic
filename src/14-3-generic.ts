const getProperty = <T, K extends keyof T>(obj:T, key:K):T[K] => {
    return obj[key]
}

const user3 = {name:"Alice", age:24}

const name3 = getProperty(user3, "name")
const age3 = getProperty(user3, "age")

console.log(name3)
console.log(age3)