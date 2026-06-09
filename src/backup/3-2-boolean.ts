const checkAccess = (userRole:string):boolean => {
    return userRole === "admin"
}

let role:string = "admin"

console.log(`Access granted : ${checkAccess(role)}`)