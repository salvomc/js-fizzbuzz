

const ulElement = document.querySelector("ul");


    for (let i = 1 ; i < 101 ; i++) {

        const liElement = document.createElement("li");
    
        liElement.append(i);

        ulElement.append(liElement);

        if (i % 5 === 0 && i % 3 === 0) {
            
            liElement.innerHTML = "fizzbuzz";
        
        } else if (i % 3 === 0){
            
            liElement.innerHTML = "fizz";
        
        } else if (i % 5 === 0) {
            
            liElement.innerHTML = "buzz";
        }
        
    }


