
const numbersElement = document.querySelector(".container")

for (let i= 1; i<=100;i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log(i,"FizzBuzz");
        const markupLi = `
        <div class="number bg_three_five">
            <div>fizzbuzz</div>
        </div>
        `
        numbersElement.insertAdjacentHTML("beforeend", markupLi)
    } else {
        if(i % 3 == 0){
            console.log("Fizz");
            const markupLi = `
            <div class="number bg_three">
                <div>fizz</div>
            </div>
            `
            numbersElement.insertAdjacentHTML("beforeend", markupLi)
            
    }   if (i % 5 == 0){
            console.log("buzz");
            const markupLi = `
            <div class="number bg_five">
                <div>buzz</div>
            </div>
            `
            numbersElement.insertAdjacentHTML("beforeend", markupLi)
           
            
    }   if (i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
            const markupLi = `
            <div class="number bg_blue ">
                <div>${i}</div>
            </div>
            `
            numbersElement.insertAdjacentHTML("beforeend", markupLi)
            
    }
        
    
  }
}


