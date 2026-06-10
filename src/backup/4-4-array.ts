const printTypes = (arr:any[]):void => {
    arr.forEach((item, index) => {
        console.log(`index ${index} : ${item} (type: ${typeof item})`)
    })
}

let mixed:any[] = [42, "hello", true]

printTypes(mixed)