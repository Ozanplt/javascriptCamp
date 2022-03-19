function addToCart(quantity, productName="Elma"){
    console.log("Sepete eklendi: " + productName + " adet: " + quantity)
}

addToCart()
addToCart(10)
addToCart(undefined,"Karpuz")

// arrow functions
let sayHello = () =>{
    console.log("Hello world!")
}

sayHello()

let sayHello2 = function(){
    console.log("Hello world 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

function addToCart3(product){
    console.log("Ürün : "+ product.productName, " adet: " + product.unitPrice + " fiyat: " + product.quantity)
}
let product1 = {productName:"Elma", unitPrice:10,quantity:5}
addToCart3(product1)

let product2 = {productName:"Elma", unitPrice:10,quantity:5}
let product3 = {productName:"Elma", unitPrice:10,quantity:5}

product2= product3
product2.productName = "Karpuz"
console.log(product3.productName)

let sayi1 = 10;
let sayi2 = 20;
sayi1 = sayi2;
sayi2=100
console.log(sayi1)

function addToCart4(x){
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10,quantity:5},
    {productName:"Armut", unitPrice:10,quantity:5},
    {productName:"Karpuz", unitPrice:10,quantity:5}
]
addToCart4(products)

// rest
function add(bisey,...numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];

        
    }
    console.log(total)
    console.log(bisey)
}

add(20,30)
add(20,30,40)

//spread
let numbers = [30,10,500,600,120]
console.log(Math.max(...numbers))


//destructuring
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name: "İç Anadolu", population:"20M"},
    {name: "Marmara", population:"30M"},
    {name: "Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],

    ]
]

console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)



let newProductName, newUnitPrice , newQuantity;
({productName: newProductName, unitPrice: newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10,quantity:5}),

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
