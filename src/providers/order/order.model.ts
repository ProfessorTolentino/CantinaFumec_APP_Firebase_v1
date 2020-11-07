import { CartItem } from "../shopping-cart/cart-item.model";

class Order {
    constructor(
        public id:string,
        public userEmail:string,
        public date: string,
        public value: number,
        public items: CartItem[]
    ) { }
}

export {Order}