const arr = [1,2,3,4,5]

const result = arr.reduce( function (acc ,curval) {
    console.log(`acc : ${acc} , current value : ${curval}`)
    return curval + acc
},1)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);