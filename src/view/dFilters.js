const dFilter = {
  money: function (item) {
    console.log(typeof item)
    return item.toLocaleString()
  },
  moneys: function (val) {
    var rev = val.split('').reverse()
    var a = []
    rev.forEach((item,index)=> {
      if((index + 1) % 3 == 0 && index + 1 !== val.length) {
        a.push(','+item)
      }else {
        a.push(item)
      }
    })
    return a.reverse().join('')
  }
}

export default dFilter
