//Write a function that takes in a string and returns it when reversed
//let food = “eating”
let food=["eating",];
console.log(food.reverse());


//Write a function that takes in the following array and consoles 
//the target if it is found else

//null
//let num = [2,8,0,23,5,45,76]
//Target = 23
function merge(num) {
    if (num.length<=1) {
        return num
        
    }
    let middle=Math.floor(num.length -1 /2)
    let left=num.slice(0,middle)
    let right=num.slice(middle)
    return sort(merge(left),merge(right))
    
}
function sort(left,right) {
    let empty=[]
while (left.length && right.length) {
    if (left[0]<right[0]) {
        empty.push(left.shift())
        
    }
    else{
        empty.push(right.shift())
    }
   
    
}
return[...empty,...left,...right]

    
}
let num = [2,8,0,23,5,45,76]
console.log(merge(num));
//binary
function binary(num1,target) {
    let leftindex=0;
    let rightindex=num1.length -1;
    while (leftindex<=rightindex) {
        let middle=Math.floor((leftindex+rightindex)/2);
        if (num1[middle]===target) {
            return middle
            
        }
        else if (num1[middle]>target) {
            rightindex=middle-1
            
        }
        else{
            leftindex=middle+1
        }
       
        
    }
    
}
let num1=[0,2,5,8,23,45,76];
let target=23;
console.log(binary(num1,target));

//Given years between 2000 and 2023, console all the leap years in the following
//sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let leapyear=[2020,2021,2022,2023];

if (leapyear%4===0) {
    console.log("its a leap year");

    
}
else{
    console.log("not a leap year");
}
//Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//“Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numm=1;
for (let i = 0; numm < 100; i++) {
    numm+=2
    if (num%3===0 && num%5===0) {
        console.log("fizzBuzz");
        
    }
    else if (num%3===0) {
        console.log("Fizz");
        
    }
    else if (num%5===0) {
        console.log("Buzz");
        
    }


   
    
}
//Write a function that takes in an array of numbers and returns an array that has all
//elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73];
let numArr=numArray.filter(multiplication)
function multiplication(multiply) {
    return multiply*4 
   
}
console.log(numArr);  



