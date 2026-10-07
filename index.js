// unshift , shift, includes

let transportationType = ["Motorcycle", "Motorvehicle", "Truck"];
transportationType.unshift("Train");
console.log(transportationType);

let alcholType = ["Beer", "Cider", "Whiskey", "Gin"];
const ar = alcholType.map((string) => string.concat("s"));
console.log(alcholType);

let transTypes = ["Motorcycle", "Motorvehicle", "Truck"];
if (transTypes.includes("Boat")) {
    console.log("Valid Transportaion Used!!!");
} else {
    console.log("Invalid Transportaion Used!!!");
}

console.log(ar);

let addresses = [
    {
        streetName: "Charlie-Street",
        houseNumber: "344",
        surburb: "Mamelodi",
    },
    {
        streetName: "Makhi-Street",
        houseNumber: "10",
        surburb: "Silverton",
    },
    {
        streetName: "DIDI-Street",
        houseNumber: "400",
        surburb: "NYC",
    },
];

console.log(addresses[0], addresses[1].streetName, addresses[2].surburb);
const first = addresses.shift();
console.log(first.surburb);

function prod(price,quantity){

    return price * quantity;

}
const amountDue = prod(15,3 );
console.log("The amount due for all these products is " + amountDue);


let productss =
    [{
        name: "Laptop",
        model: "Acer",
        price:1200,
        quantity:2,
    },
        {
            name: "Computer",
            model: "Dell",
            price:900,
            quantity:5,
        },
        {
            name: "Speaker",
            model: "JBL",
            price:16200,
            quantity:1,
        }

    ];

function val (productss){
    var gg ='';
    for ( let product of productss){
        gg += '\n' + product.name + ' ' + product.model + ' ' + product.price + ' ' + product.quantity;


    }
    return gg;
}
console.log(val(productss))

let me = {
    name:'Motsei',
    amount: 500,
    items: [
        {names: "keyboard", money:150, mod:'logitech'},
        {names: 'Mouse', money: 200, mod: 'Dellmouse'}
    ]
}

function buy(me){
    var cost = 0;
    for ( let item of me.items){
        cost += item.money;
    }
    var change = me.amount - cost;
    return "\n" + "the cost of both products is " + cost + " change from buying these products is " + change;
}

console.log(buy(me));

