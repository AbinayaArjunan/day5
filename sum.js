//ANONYMOUS
let a =[10,20,30,40]
function sum(a){
    let sum =0;
    for(let i=0;i<a[i].length;i++){
        sum = sum+a[i]
    }return sum
}
console.log(sum(a));
//IIFE
(function sum(a){
    let sum =0;
    for(let i=0;i<a.length;i++){
        sum = sum+a[i]
    }console.log(sum);
})([10,20,30,40]);
//sample output:
//100
//ARROW FUNCTION
let sum = (b) =>{
    let sum =0;
    for(let i=0;i<b.length;i++){
        sum = sum+a[i]
    }return sum;

}
let b =[10,20,30,40];
console.log(sum(b));