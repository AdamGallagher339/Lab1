//boolean
let flag: boolean = true;
console.log("value assigned to flag is: "+flag);

//number
let num1: number = 1;
console.log("value assigned to num1 is: "+num1);

//string
let string1: string = "test";
console.log("value assigned to string1 is: "+string1);


//array
let myArray: number[] = [1, 2, 3];

myArray.forEach((item)=>{
    console.log(item);
})

//function
let string2: string = " test 1 ";
let trim1: string = string2.trim();
console.log("length is: "+trim1.length);