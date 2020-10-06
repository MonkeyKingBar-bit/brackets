module.exports = function check(str, bracketsConfig) {
	let	stack = []
  
  for (let i = 0; i < str.length; i++){
  	let isOpen = false
  	let isClose = false
  	let isConch = false
    let cb = 0
    for(let j  = 0; j < bracketsConfig.length; j++){
    	if(str[i] == bracketsConfig[j][0]) {
      	
      	isOpen = true
        cb = j
      }  
      if(str[i] == bracketsConfig[j][1]) {
      
      	isClose = true
        cb = j
      }      
   	}
    
    if (isOpen && isClose){ 
   
    	isOpen = false
      isClose = false
      isConch = true
    } 
    if (isConch){
    	
    	if(stack.length == 0 ) stack.push(bracketsConfig[cb][0])   
      else{
      	if (stack[stack.length -1 ] == bracketsConfig[cb][0]) stack.pop()
      	else stack.push(bracketsConfig[cb][0])
      }
    }      
    
    if(isOpen) stack.push(bracketsConfig[cb][0])
    if(isClose){
    	
    	if(stack.length == 0) return false
      else {
      	if (stack[stack.length - 1] == bracketsConfig[cb][0]) stack.pop()
        else return false
      }
    }
    
  }	
 if (stack.length > 0) return false
 else return true
  

}
