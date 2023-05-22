function whichIsLarger(f,g){
  const a = f()
  const b = g()
  if(a == b){
    return "neither"
  }
  return a>b? "f": "g"
}
