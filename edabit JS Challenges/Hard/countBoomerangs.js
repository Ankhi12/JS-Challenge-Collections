function countBommerangs(array){ 
    let a = 0
    let b = 2
    const res = []
    if(array[a] === array[b]){
        res.push([array[a], array[a+1], array[b]])
        a = b
        b = a + 2
    }
    while(b < array.length){
        for(let i = a; i <=b; i++){
            if(array[a] === array[b]){
                res.push([array[a], array[a+1], array[b]])
                a = b+1 - 1 
                b = a + 2
            }
        }
         a = b 
         b = a + 2
    }
return res.length
}
