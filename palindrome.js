//COMMON

function isPalindrome(s)
{
    let a = s;
    s = s.split('').reverse().join('');

    return s == a;
}
 
// Function to return all Palindrome string
//ANONYMOUS
function PalindromicStrings(arr,N)
{
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr.length;
console.log(PalindromicStrings(arr,N))
//IIFE
(function PalindromicStrings(arr)
{
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
 
            // Update answer variable
            ans.push(arr[i]);
        }
    }
    //let N = arr.length;
console.log(ans)
})([ "abc", "car", "ada", "racecar", "cool"]);

//arrow function
let PalindromicStrings = (arr1,N1) =>{

    let ans = [];
    for (let i = 0; i < N1; i++) {
        if (isPalindrome(arr1[i])) {
 
            // Update answer variable
            ans.push(arr1[i]);
        }
    }
    return ans;
}
let arr1 = [ "abc", "car", "ada", "racecar", "cool" ];
let N1= arr1.length;
console.log(PalindromicStrings(arr1,N1))
