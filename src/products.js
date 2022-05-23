 import Tshirt from "./images/Tshirt.png"
 import Bangles from "./images/bangles.png"
 import Biro from "./images/biro.png"
 import Sticker from "./images/sticker.png"
 import Hoodie from "./images/sweater.png"
 import Jotter from "./images/jotter.png"
 const products = [
    {
        id: 1,
        cetegory: "FutureLabs Polo",
        image : Tshirt,
        price: "₦2000.00"
    },
    {
        id: 2,
        cetegory: "Bangles",
        image : Bangles,
        price: "₦250.00"
    },
    {
        id: 3,
        cetegory: "Stickers",
        image : Sticker,
        price: "₦200.00"
    },
    {
        id: 4,
        cetegory: "Jotter",
        image : Jotter,
        price: "₦1000.00"
    },
    {
        id: 5,
        cetegory: "Hoodie",
        image : Hoodie,
        price: "₦2500.00"
    },
    {
        id: 6,
        cetegory: "Biro",
        image : Biro,
        price: "₦2500.00"
    },
]


export function futureProducts() {
    return products;
}