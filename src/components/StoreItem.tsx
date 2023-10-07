import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { UseShoppingCart } from "../context/shoppingCartContext"

type StoreItemProps = {
    id: number
    name: string
    imgUrl: string
    price: number
}
export const StoreItem = ({id, name, imgUrl, price}: StoreItemProps) => {

    const {
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = UseShoppingCart()
    const quantity = getItemQuantity(id);
    return (
        <Card className="h-100">
            <Card.Img src={imgUrl}
            height={200}
            variant="top"
            style={{
                objectFit: 'cover'
            }}/>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fs-2">{name}</span>
                    <span className="text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {
                        quantity == 0 ?(
                            <Button className="w-100" onClick={() => increaseQuantity(id)}>
                                + Add to cart
                            </Button> 
                        ): <div className="d-flex justify-content-center flex-column align-items-center" style={{gap: '.5rem'}}>
                                <div className="d-flex justify-content-between align-items-center" style={{gap: '.5rem'}}>
                                    <Button onClick={() => decreaseQuantity(id)}>-</Button>
                                        <div>
                                            <span className="fs-3">{quantity}</span>
                                            in cart
                                        </div>
                                    <Button onClick={() => increaseQuantity(id)}>+</Button>
                                </div>
                                <Button onClick={() => removeFromCart(id)} variant="danger" className="bg-danger">
                                    remove
                                </Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
[]