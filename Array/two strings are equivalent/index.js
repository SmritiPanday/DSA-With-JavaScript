let word1 = ["ab", "cd"];
let word2 = [ "jk"];

function twoStr(word1, word2) {
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(twoStr(word1, word2)); 
