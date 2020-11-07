import { Product } from '../products/products.model'

export class CartItem {
    constructor(public menuItem: Product,
        public quantity: number = 1) { }

    value(): number {
        return this.menuItem.price * this.quantity
    }
}