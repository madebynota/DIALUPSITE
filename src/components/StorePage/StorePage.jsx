import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ItemCard from './ItemCard';
import styles from './styles/StorePage.css';
import { Link } from 'react-router';
import Client from 'shopify-buy';


const client = Client.buildClient({
  domain: 'dialupstuff.myshopify.com',
  storefrontAccessToken: 'ba930ebed978dae5927d3f80e3ae2595'
});

let cx = classNames.bind(styles);

class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          images: [
            {
              src: 'www.google.com'
            }
          ],
          variants: [
            {
              price: "Free.99"
            }
          ],
          description: 'SuperLucha Tee (White)',
          price: '$19.99',
          url: '/store/item/tee',
          id: 'tee',
          title: 'Water Bottle'
        },
        {
          images: [
            {
              src: 'www.google.com'
            }
          ],
          variants: [
            {
              price: "Free.98"
            }
          ],
          description: 'Sticker Pack',
          price: '$19.99',
          url: '/store/item/tee',
          id: 'tee',
          title: 'Water Bottle'
        },
      ]
    }
  }

  componentDidMount() {
  // Fetch all products in your shop
    client.product.fetchAll().then((products) => {
      // Do something with products
      console.log("These are the products:")
      console.log(products);
      this.setState({
        'products': products
      });
    });
  }

  render() {
    return (
      <div className={cx("StorePage")}>
        <Grid fluid>
          <Row>
            <Col xsOffset={3} xs={6} smOffset={5} sm={2}>
              <img className={cx("header")} src="img/logos/logo-2.png"/>
            </Col>
          </Row>
          <Row className={cx("productContainer")}>
            {this.state.products.map((product, index) => (
              <Col xs={12} sm={4} key={index}>
                <Link to={product.title} >
                  <ItemCard
                    image={product.images ? product.images[0].src : 'http://dialupstuff.com/img/logos/logo-2.png'}
                    description={product.description}
                    price={product.variants[0].price}
                  />
                  </Link>
              </Col>
            ))}
          </Row>
        </Grid>
        <p className={cx("storeFooter")}>STORE</p>
      </div>
    )
  }
}

export default StorePage;
