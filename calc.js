// DOM
let result = document.getElementById("result");

result.value = '0';

let mark = document.getElementsByClassName("mark")
let count = 0;
let resultSearch = '+'/'-'/'*'/'/';

// 関数    
function edit(elem) {
     if(result.value =='0') {
     result.value = elem.value;
     }else if(result.value === mark){
     elem.value !== mark ;
     result.value = result.value + elem.value  ;
     }else{
     
     }
}
function calc() {
    result.value = new Function("return " + result.value)();
}
function reset(){
   result.value = '0';
}
