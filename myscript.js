//Exercise = "Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”".

const contenitore = document.querySelector("#container");
const element = `<div class="box"></div>`;

//Write a cycle of numbers that goes from 1 to 100
for (let i = 1; i <= 100; i++){
    //Adding first condition
    if (i % 3 === 0){//the number is a multiple of 3, then print “Fizz” in place of the number.
        console.log("Fizz");
      
    }else if (i % 5 === 0){//the number is a multiple of 5, then print “Buzz” in place of the number.
        console.log("Buzz");
       
    } if (i % 3 === 0 && i%5 === 0){//the number is a multiple of 3 and 5, then print “FizzBuzz” in place of the number.
        console.log("FizzBuzz");
        
    }else{
        console.log(i);
       
    }
}


contenitore.innerHTML += element;
