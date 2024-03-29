import {Nav, Container, Button, Navbar as NavbarBs } from "react-bootstrap";
import {NavLink } from "react-router-dom";
import { UseShoppingCart } from "../context/shoppingCartContext";
export const Navbar = () => {

  const {cartQuantity, openCart} = UseShoppingCart()
  return (
    <NavbarBs className="mb-2 bg-white shadow-sm" sticky="top">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to='/' as={NavLink} >Home</Nav.Link>
                <Nav.Link to='/about' as={NavLink} >About</Nav.Link>
                <Nav.Link to='/store' as={NavLink} >Store</Nav.Link>
            </Nav>{cartQuantity > 0?
            (<Button 
              onClick={ openCart}
              style={{width: '3rem', height: '3rem', position: 'relative' }} 
              variant="outline-primary"
              className="rounded-circle d-flex justify-content-center align-items-center">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Interface / Shopping_Cart_01">
                <path id="Vector" d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
              </svg>
              
                <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    position: 'absolute',
                    color: 'white',
                    width: '1.5rem',
                    height: '1.5rem',
                    right: 0,
                    bottom: 0,
                    transform: 'translate(25%, 25%)'
                  }}
                >
                  {cartQuantity}
                </div>
            </Button>):null}
        </Container>
    </NavbarBs>
  )
}
