function balancedBracket(string){

    const brackets = []
    const stringToArray = string.split(', ')
    for(let i of stringToArray){
        if(i === "(" || i === "{" || i === "["){

            brackets.push(i)

        }
        else if(i === ")" || i === "}" || i === "]"){
            brackets.pop()
        }
    }

    if(brackets.length === 0){
        return true
    }
    else{
        return false
    }

}
