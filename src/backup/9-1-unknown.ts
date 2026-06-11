const processInput = (value:unknown):void => {
    if(typeof value === "string"){
        console.log(`${value.toUpperCase()}`)
    }else if (typeof value ==="number"){
        console.log(`${value.toFixed(2)}`)
    } else {
        console.log("Unknown type")
    }
}

processInput("Hello Typpescript")
processInput(123456)
processInput(true)