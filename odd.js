
//1.Print odd numbers in an array using IIFE

(function odd(num) {let a =[]
    
 for(let i=0;i<num.length;i++){
    if(num[i]%2==1){
        a.push(num[i]);
                
            }
 }console.log(a)
 } )([9,7,6,4,5])   
//2.Print odd numbers in an array using anonymous
    let b=[10,20,5,7,25]
    let c=[]
       function odd(b){
        for(let j=0;j<b.length;j++){
            if(b[j%2==1]){
                c.push(b[j])

            }
        }console.log(c)
       }
 //3. Print odd numbers in an array using arrow function
 
 let a=[10,2,3,4,5]
 let d=[]
 let odd=(a)=>{
    for(let j=0;j<b.length;j++){
        if([j%2==1]){
            d.push(a[j])

        }
    }console.log(d)
 }