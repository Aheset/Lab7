var groceryList = [];
groceryList[0]= {name: "bread", price: 2.99};
groceryList[1]= {name: "cereal", price: 1.99};
groceryList[2]= {name: "banana", price: 0.99};

var total = 0;
groceryList.forEach(function(el){
  console.log(el.name + " $ " + el.price);
  total += el.price;
  
  
});

console.log("Total price: " + total); 

