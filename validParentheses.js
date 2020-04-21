/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var input = s;
    for(i = 0; i < s.length / 2; i++){  
        input = input.replace("[]","")
        input = input.replace("{}","")
        input = input.replace("()","")
    }
  if(input == ""){
    return true
  }
  return false
};
