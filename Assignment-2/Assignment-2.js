
// const clothes = ['jacket','t-shirt'];
// clothes.length=0;
// console.log(clothes[0]);
/*This is undefined. Because, due to the behaviour of the 
length() this will set the array to 0. Means Delete all the 
elements of the array. */


//Program to print sum of array elements.
var arr=[10,20,30,40,50];
sum=0;
for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("Sum of Array elements:-"+sum);