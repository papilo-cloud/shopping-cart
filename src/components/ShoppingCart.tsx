import { Offcanvas } from "react-bootstrap"

export const ShoppingCart = () => {
  return (
    <Offcanvas>
        <Offcanvas.Header show={true}>
            <Offcanvas.Title closeButton >
                Cart
            </Offcanvas.Title>
        </Offcanvas.Header>
    </Offcanvas>
  )
}
