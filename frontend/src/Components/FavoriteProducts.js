import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import productsimg from "../images/productsimg.jpeg";

const favoriteProducts = () => {
  const Products = [
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
      imageSrc:
        "https://www.harryharvey.com/Graphics/Std_Product_Images/mangal-biryani-masala-100g-pack-size-full-case-926-p.jpg",
      unit_price: 3,
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
  return (
    <div>
      <div className='img-product'>
        <img src={productsimg} alt='product'></img>
      </div>
      <h2 className='red-letters'>PRODUCTS</h2>
      <div id='favorite-products-cards' className='cards'>
        {Products.map((product, index) => {
          return (
            <div key={index}>
              <CardDeck>
                <Card>
                  <Card.Img
                    variant='top'
                    src={product.imageSrc}
                    className='card-image'
                  />
                  <Card.Body>
                    <Card.Title className='card-info'>
                      <a
                        href={product.url}
                        target='_'
                        className='btn btn-primary'>
                        {product.name}
                      </a>
                    </Card.Title>
                    <Card.Text className='card-info'>
                      <div></div>€<div>{product.unit_price}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default favoriteProducts;
