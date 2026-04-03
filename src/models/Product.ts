// class
class Product {
  //properties
  sku: string;
  name: string;
  price: number;

  constructor(sku: string, name: string, price: number) {
    this.sku = sku;
    this.name = name;
    this.price = price;
  }

  displayDetails(){
    return`sku: ${this.sku} name: ${this.name}  price: ${this.price}`;
  }
   
// Grabs 
  getPricewithTax(taxRate : number  = 0.1): number {
    return this.price * (1 + taxRate);
  }


}


