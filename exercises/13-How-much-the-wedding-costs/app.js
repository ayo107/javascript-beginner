let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if (guests <= 50) {
        console.log (cost = 4000);
      } if (guests >= 51 && guests <= 100) {
        console.log (cost = 10000);
      } if (guests >= 101 && guests <= 200){
        console.log (cost = 15000);
      } else if (guests >200){
          console.log(cost = 20000);
      }
    
    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
