// complete the given function

function palindrome(str){
	 let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x != y) {
            
            return false;
        }
    }
   
    return true;

}
module.exports = palindrome
