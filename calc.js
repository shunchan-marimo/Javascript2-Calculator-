// DOM
let result = document.getElementById("result");
result.value = '0';

// 関数    
function edit(elem) {
    if(result.value =='0'){
     result.value = elem.value;
    }else{
     result.value = result.value + elem.value;
    }
}
function calc() {
    result.value = new Function("return " + result.value)();
}
function reset(){
   result.value = '0';
}
