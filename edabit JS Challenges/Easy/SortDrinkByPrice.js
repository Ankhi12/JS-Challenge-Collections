function sortDrinkByPrice(drinks){
   for(let i = 0; i < drinks.length; i++){
        if(i + 1 < drinks.length){
            if(drinks[i].price > drinks[i+1].price){
                const temp = drinks[i]
                drinks[i] = drinks[i+1]
                drinks[i+1] = temp 
            }
        }
   }
   return drinks
}
