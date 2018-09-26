const myFunction = function(a, b, c) {
  return a * b + c;
};
    const numVal = myFunction(6, 4, 3);
    console.log(numVal);


const Func = function() {
  return 100;
};
  const numVal1 = Func()
  console.log(numVal1);


const Func1 = function(a, b) {
  
};
    const numVal2 = Func1(1, 2);
    console.log(numVal2);


const Func2 = function(s1, s2, s3) {
  if (s1.length > s2.length && s1.length > s3.length) {
  return s1;
} else  if(s2.length > s1.length && s2.length > s3.length) {
  return s2;
} else {
  return s3;
}
}; 
     const stringVal = Func2("Martin", "Antonyan", "Artavazd");
     console.log(stringVal);


const Func3 = function(c, d) {
  if(c === d) {
  return 0;
} else if(c > d) {
  return 1;
} else {
  return -1;
}
};    
   const numVal3 = Func3(1990, 3000);
   console.log(numVal3);


const multi = function(num1, num2) {
  return num1 * num2;
};   
   const ValueS = multi(36, 17);
   console.log(ValueS);


const divide = function(num3, num4) {
  return num3 / num4;
}; 
   const ValueS1 = divide(1024, 16);
   console.log(ValueS1);
   

const triangleArea = function(base, height) {
  const ccc = multi(base, height);
  const ddd = divide(ccc, 2);
  return ddd;
};
     const Tri = triangleArea(14, 16);
     console.log(Tri);


const numLength = function(stringA) {
    return stringA.length;
};
    const AbC = numLength("40393028");
    console.log(AbC);


const strNum = function(stringOne, stringTwo, Numba) {
     if((stringOne + stringTwo).length > Numba) {
     return 1;
 }  else {
   return -1;
}
};
    const EnO = strNum("Garnik", "Joe", 17);
    console.log(EnO);


const runStuff = function(Numba1, Numba2, String123) {
  if(String123 === "rectangle") {
  return Numba1 * Numba2;
} else if(String123 === "triangle") {
  return (Numba1 * Numba2) / 2;
} else {
  return -1;
}
};
    const Omlette = runStuff(22, 45, "rectangle");
    console.log(Omlette);