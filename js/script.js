for (let num= 1; num<=100; num++) {

    if (num % 5 === 0 && num% 3 === 0){
        let num = "fizzbuzz";
        console.log(num);
    
    } else if (num % 3 === 0){
        let num = "fizz";
        console.log(num);

    } else if (num % 5 === 0) {
        let num = "buzz";
        console.log(num);
    }

    else {
        console.log(num);
    }
    
}