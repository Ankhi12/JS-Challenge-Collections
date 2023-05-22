function minMax(array){
    let max = -Infinity
    let min = Infinity
    for(let i = 0; i < array.length; i++){
        if(array[i] > max || array[i] < min){
            max = Math.max(array[i], max)
            min = Math.min(array[i],min)
        }
    }
return [min, max]
}
