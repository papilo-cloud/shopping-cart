import { Button, Stack } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'
import { UseShoppingCart } from '../context/shoppingCartContext'



type cartItemProps = {
    id: number
    quantity: number
}

export const CartItem = ({id, quantity}: cartItemProps) => {

    const {removeFromCart} = UseShoppingCart()
    const items = storeItems.find(i => i.id == id)
    if (items == null) {
        return null
    }
  return (
    <Stack gap={2} direction='horizontal' 
    className='d-flex align-items-center' >
        <img src={items.imgUrl}
        style={{
            width: '125px',
            height: 75,
            objectFit: 'cover'
        }} />
        <div className='me-auto'>
            <div>
                {items.name}{quantity> 1&& (
                    <span className='text-muted' style={{fontSize: '.65rem'}} >x{quantity}</span>
                )}
            </div>
            <div className='text-muted' style={{fontSize: '.75rem'}}>
                {formatCurrency(items.price)}
            </div>
        </div>
        <div>{formatCurrency(items.price* quantity)}</div>
        <Button variant='outline-danger' onClick={() => removeFromCart(items.id)}>
            &times;
        </Button>
    </Stack>
  )
}
