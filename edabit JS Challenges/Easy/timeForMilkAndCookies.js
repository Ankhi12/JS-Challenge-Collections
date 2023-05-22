function timeForMilkAndCookies(date){
    const month = date.getMonth()
    const entDate = date.getDate()
    
    if(entDate == 24 && month == 11){
        return true
    }
    return false
}
