/* Comprobar si un array(sequence) es subsecuencia de otro (array)
    [2,4] <-> [1,2,3,6,4,6,4]
*/
var subS = true
function isValidSubsequence(array, sequence) {
  // Write your code here.
	let intersection =[...array]
        .filter(x => sequence.includes(x))
    console.log(intersection,sequence)
    for(var i in sequence){
        if(sequence[i] != intersection[i]){
            subS = false
        }
    }
    return subS
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[5, -1, 8, 10]))