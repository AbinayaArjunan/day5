//IIFE
(function dupli(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4]);
   //anonymous
   function dupli(array){
    let dup = [...new Set(array)];
    return dup;
   }
   let array =[1,1,2,3,4];
   console.log(dupli(array));





