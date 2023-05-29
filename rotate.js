//common

function reverse(a, li , ri){
    while(li < ri){
         let temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }
   //IIFE
   (function rev(a , k){
                         k = k % a.length;
                            
                        if(k < 0){
                             console.log(k += a.length);
                               }
   
                         reverse(a, 0, a.length - k - 1);
                        reverse(a, a.length - k, a.length - 1);
                        reverse(a, 0, a.length - 1);
                        console.log(a)
                         })([1,2,3,4] , 2);
//ANONYMOUS
function rev(a ){
    k = k % a.length;
       
   if(k < 0){
        console.log(k += a.length);
          }

    reverse(a, 0, a.length - k - 1);
   reverse(a, a.length - k, a.length - 1);
   reverse(a, 0, a.length - 1);
   return a;}
   let a=[1,2,3,4,5];
   let k=2;
   console.log(rev(a))


                             