/*

Problem Statement - Find the most occurance of a character in a string

*/

function commonlyUsedCharinString(string){
    let count = 0
    let res = ""
    let resTemp = ""
    for(let i of string){

        if(res.includes(i)){
            count +=1
            count = Math.max(count)
            resTemp = i
        }
        else{
            res+=i
        }
    }
    return resTemp
}
