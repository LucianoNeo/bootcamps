export interface IProducts {

    id: number,
    name: string,
    brand: string,
    image: string,
    price: number,
    inStock: boolean,

}

export interface ICart{
    cart: IProducts[]
}