/*

Problem Statement - 153 - True as 153 = 1^3 + 5^3 + 3^3

*/

function armstrongNumber(num){

    const lengthofNum = num.toString().length

    const numtoArray = num.toString().split('')

   
    let sum = 0

    for(let i of numtoArray){

        sum += Math.pow(parseFloat(i),lengthofNum)

    }

    if(sum === num){

        return true
    }

    else{
        return false
    }   

}
