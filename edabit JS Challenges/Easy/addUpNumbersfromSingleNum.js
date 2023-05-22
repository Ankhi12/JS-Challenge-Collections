# Using recursive function

function addUpNumbers(num){
    let sum = 0 
    function check(num){
        if(num < 1){  // Base condition
            return sum
        }
        else{ 
            sum += num 
            check(num - 1)
        }   
}
check(num)
return sum
}
console.log(addUpNumbers(4)) // Output = 1+2+3+4 = 10
