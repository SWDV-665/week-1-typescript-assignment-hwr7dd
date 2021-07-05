class Grocery {
    lineItem: string;
    constructor(
      public name: string,
      public quantity: number,
      public price: number,
    ) {
      this.lineItem = name + " " + quantity + " " + price;
    }
  }
  
  interface Items {
    name: string;
    quantity: number;
    price:number;
  }
  
  function greeter(item: Items) {
    return "Item: "+ item.name + " " +"Quantity: "+ item.quantity+" "+"Price: "+ "$"+item.price;
  }
  let itemlist =[];
  let lineitem1 = new Grocery("Potato", 5, 4);
  let lineitem2 = new Grocery("Strawberry", 2, 3);
  itemlist.push(lineitem1);
  itemlist.push(lineitem2);
  function itemprinter(){
    
  }
  document.getElementById("test2").textContent = greeter(lineitem1);
  document.getElementById("test").textContent = greeter(lineitem2);