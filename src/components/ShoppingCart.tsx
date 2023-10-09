import { Offcanvas, Stack } from "react-bootstrap"
import { UseShoppingCart } from "../context/shoppingCartContext"
import { CartItem } from "./CartItem";
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency";

export const ShoppingCart = ({isOpen}: {isOpen: boolean}) => {

  const {closeCart, cartItem} = UseShoppingCart();

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItem.map(item => (
              <CartItem {...item} key={item.id} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              ToTal{''} {
                formatCurrency(cartItem.reduce((total,cart) =>{
                  const items = storeItems.find(i => i.id == cart.id)
                  return total + (items?.price || 0)* cart.quantity
                }, 0)
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
