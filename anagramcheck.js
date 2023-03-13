function anagramCheck(string1, string2){

    let count = 0

    if(string1.length !== string2.length){
        return false
    }
    else{

        for(let i of string1){
            if(string2.includes(i)){

                count +=1
            }
        }

        if(count === string1.length){
            return true
        }
        else{
            return false
        }
    }

}
