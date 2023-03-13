
/*
Problem statement - To find a string permutation is pallindrome.
*/


function stringPaliCheck(string){

    const lengthofString = string.length
    const stringObj = {}
    let count = 0

    if(lengthofString === 1){
        return true
    }

    else if(lengthofString % 2 === 0){

        for(let i of string){
            if(i in stringObj){
                stringObj[i] +=1
            }
            else{
                stringObj[i] = 1
            }
        }
       
        for(let i in stringObj){
            if(stringObj[i] %2==0){
                continue
            }
            else{
                return false
            }
        }
        return true

    }


    else if(lengthofString % 2 !== 0){

        for(let i of string){
            if(i in stringObj){
                stringObj[i] +=1
            }
            else{
                stringObj[i] = 1
            }
        }
    
        for(let i in stringObj){
            if(stringObj[i]%2!=0){
                count +=1
                if(count == 1){
                    console.log("Inside")
                continue
                }
                else{
                    console.log("Inside else")
                    return false
                }
            }
            
        }
        return true

    }


}
