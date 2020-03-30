/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var tempString = "";
    s = s.trim();
    if(s.lastIndexOf(" ") == -1) {
        tempString = s;
    }
    else {
        tempString = s.substring(s.lastIndexOf(" ")+1);
    }
    return tempString.length;
};
