import React from "react";
import { Row } from 'react-bootstrap'

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import productsimg from "../images/productsimg.png";
import { getImages } from "../images/products/products";


const favoriteProducts = ({data}) => {
  if (data.length < 1) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <div className='img-product'>
        <img src={productsimg} alt='product'></img>
      </div>
      <h2 className='red-letters'>PRODUCTS</h2>
      <Row id='favorite-products-cards' className='cards'>
        {data.map((product, index) => {
          return (
            <CardDeck key={index}>
              <Card>
                <Card.Img
                  variant='top'
                  src={getImages(product.product_pic)}
                  className='card-image'
                />
                <Card.Body>
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
      </Row>
    </div>
  );
};

export default favoriteProducts;


/*const Products = [
    {
      name: "Indian Spice Tin",
      url: "https://peoplemakeglasgow.com",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg6f1t3bnWkcHVp94lgxqXOX3OW8Q-mruQyA&usqp=CAU",
      unit_price: 5,
    },
    {
      name: "Biryani Masala",
      url: "https://visitmanchester.com",
      imageSrc: Biryani,
    },
    {
      name: "Jowar puffs",
      url: "https://visitlondon.com",
      imageSrc:
        "https://assetscdn1.paytm.com/images/catalog/product/F/FA/FASTHE-HEALTHY-BIGB9858325D4AB1B1/1566201731833_0..jpg?imwidth=280&impolicy=hq",
      unit_price: 3,
    },
    {
      name: "Indian Spice Tin",
      url: "https://peoplemakeglasgow.com",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg6f1t3bnWkcHVp94lgxqXOX3OW8Q-mruQyA&usqp=CAU",
      unit_price: 5,
    },
  ];
*/