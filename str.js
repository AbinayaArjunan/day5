//IIFE
(function string(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  console.log(str.join(' '));
})("ABI IN DILEMMA");
//sample output:Abi In Dilemma

  //anonymous :  
   function  string(str1) {
    str1 = str1.toLowerCase().split(' ');
    for (let i = 0; i < str1.length; i++) {
      str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1); 
    } 
    return str1.join(' ');
  }
  let str1="ABI IN DILEMMA"
  console.log(string(str1))
  //ARROW FUNCTION
  let string = (stri) => {
    stri =stri.toLowerCase().split(' ');
    for(let i =0;i<stri.length;i++){
      stri[i] = stri[i].charAt(0).toUpperCase() +stri[i].slice(1);

    }return stri.join(' ');
  }
  let stri = "lilly is beauty";
  console.log(string(stri));