module.exports = function check(str, bracketsConfig) {
 let stack = [];
 let pairs = {
   ['}'] : '{',
   [')'] : '(',
   ['|'] : '|',
   [']'] : '['
 }
 for (let i=0; i < str.length ; i++){
   let curr = str[i];
   bracketsConfig.forEach((el) => {
     if (el[0] === curr){
       stack.push(curr)
       if(pairs[curr] === curr){
         stack.pop()
       }
     }
     else{
       let top = stack[stack.length -1]
       if(stack.length === 0){
         return false;
       }
       else{
         if(pairs[curr] === top){
           stack.pop()
         }
         else{
           return false;
         }
       }
     }
   })
 }
 return stack.length === 0;
}

