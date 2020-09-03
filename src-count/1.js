var obj = {
  arr1 : [1,2,3],
  fn: function(){
      console.log('我是一个方法')
  },
  a : '我是普通属性'
}


// function _cloneObj(obj) {
// if (obj instanceof Array) {
//   var copy = [];
//   for (var i = 0, len = obj.length; i < len; i++) {
//     copy[i] = typeof obj[i] == 'object' ? _cloneObj(obj[i]) : obj[i];
//   }
//   return copy;
// } else if (obj instanceof Object) {
//   var copy = {};
//   for (var key in obj) {
//     copy[key] = typeof obj[key] == 'object' ? _cloneObj(obj[key]) : obj[key];
//   }
//   return copy;
// }
// return obj;
// }



/* function deepClone(obj){
  if(obj instanceof Array){
    let copy = []
    for (var i = 0,len = obj.length; i < len; i++) {
       copy[i] = typeof(obj[i]) === 'object' ? deepClone(obj[i]) : obj[i]
    }
    return copy
  } else if (obj instanceof Object){
    let copy = {}
    for(key in obj){
      copy[key] = typeof(obj[key]) === 'object' ? deepClone(obj[key]) :obj[key]
    }
    return copy
  }
  return obj
} */


// let obj1 = '你说呢'
// console.log(deepClone(obj));


var obj = [{a:'12312',b:'hahaha'},{a:2},{a:3}];
var newArr = []
for(var i =0;i<obj.length;i++){
   let arr1 = obj[i];
  // console.log(obj[i])
  for(var j = 0; j<arr1.length;j++){
    eval("var arr_" + i + "=" + []);
    console.log([].push(arr1[j]))
  }
  console.log(newArr.push(obj[i]))
};