/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
    
  var reverseString = function(s) {
    
    if (!s) {
        return s;
    }

    const endIndex = s.length-1;
    const middleIndex = endIndex/2;
    
    for(let i=0; i<middleIndex; i++) {
        const temp = s[endIndex-i];
        s[endIndex-i] = s[i];
        s[i] = temp;
    }
    
};
