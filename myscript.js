//Exercise = "Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”".

const contenitore = document.querySelector("#container");
//Write a cycle of numbers that goes from 1 to 100
for (let i = 1; i <= 100; i++) {
    let element = `<div class="box">${i}</div>`;
    //Adding first condition
    if (i % 3 === 0){//the number is a multiple of 3, then print “Fizz” in place of the number.
        console.log("Fizz");
        element =  `<div class="box m_3">${'Fizz'}</div>`;
    }else if (i % 5 === 0){//the number is a multiple of 5, then print “Buzz” in place of the number.
        console.log("Buzz");
        element =  `<div class="box m_5">${'Buzz'}</div>`;
    } if (i % 3 === 0 && i%5 === 0){//the number is a multiple of 3 and 5, then print “FizzBuzz” in place of the number.
        console.log("FizzBuzz");
        element =  `<div class="box m_3_5">${'FizzBuzz'}</div>`;
    }else{
        console.log(i);
    }
    console.log(element);
    contenitore.innerHTML += element;
}

