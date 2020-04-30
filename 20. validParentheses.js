/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(!s){  // if s is not a valid value (either null or undefined)
        return true;
    }
    
    const stack = [];
    for(let i=0;i<s.length;i++){
        const ch = s.charAt(i);
        if(ch === '{' || ch === '[' || ch === '('){
            stack.push(ch);
            continue;
        }
        if(ch === '}' && stack.pop() !== '{'){
            return false;
        }
         if(ch === ']' && stack.pop() !== '['){
            return false;
        }
         if(ch === ')' && stack.pop() !== '('){
            return false;
        }
       
        
    }
            return stack.length === 0;

        
    
};

// time complexity = O(n)
