import React from "react";
import { ul, li, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getImages } from "../images/products/products";



const Cart = ({data}) => {
  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div className="cart-main">
        <Container>
        <h4 className="title-price">Price</h4>
        {data.map ((product, index) => {
            return (
    <div key={index}>
        <ul className="list-unstyled">
          <li className="media">
            <img src={getImages(product.product_pic)} className="mr-3 Cart-pic" alt="CartProducts"/>
            <div className="media-body">
                <h4 className="mt-0 mb-1">{product.product_name}</h4>
                <div className="description-cart">{product.description}</div>
              <div className="function-buttons-cart">
                <Link  to="#">Delete</Link >
                <div>Qty:
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select>
                </div>
              </div>
            </div>
            <h3 className="cart-price">€{product.unit_price}</h3>
          </li>
        </ul>
    </div>
        )
        }
        )}
            <h3 className="subtotal-cart-list">Subtotal (5 items): € 18 </h3>
        
        </Container>
        <div className="cart-action">
            <h4>Subtotal ({data.length} items): € 18 </h4>
            <div className=" d-flex justify-content-end">
              <Link to="#" className="btn btn-primary checkout-button">
                <span>Proceed to checkout</span>
              </Link>
            </div>
        </div>
    </div>
  );
};

export default Cart;


/*
<Row id='favorite-products-cards' className='cards'>
        {data.map((product, index) => {
          return (
            <CardDeck key={index}>
              <Card className="card-render">
                <Card.Img
                  variant='top'
                  src={getImages(product.product_pic)}
                  className='card-image'
                />
                <Card.Body className="car-body-render">
                  <Card.Title>
                    <a
                      href={product.url}
                      target='_'
                      className='btn btn-primary'>
                      {product.product_name}
                    </a>
                  </Card.Title>
                  <Card.Text className='card-info'>
                    €{product.unit_price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          );
        })}
      </Row>*/