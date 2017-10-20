import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ItemCard from './ItemCard';
import styles from './styles/StorePage.css';
import { Link } from 'react-router';

let cx = classNames.bind(styles);

class StorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProduct: false,
      checkoutProduct: {
        image: 'img/products/tee1.png',
        description: 'SuperLucha Tee (White)',
        price: '$19.99',
        url: '/store/item/tee',
      },
      products: [
        {
          image: 'img/products/tee1.png',
          description: 'SuperLucha Tee (White)',
          price: '$19.99',
          url: '/store/item/tee',
        },
        {
          image: 'img/products/stickers.png',
          description: 'StickerPack (5 count)',
          price: '$3.99',
          url: '/store/item/stickerpack1',
        },
        {
          image: 'img/products/tee2.png',
          description: 'Archie Blocka Dirty Laundry Shirt',
          price: '$14.99',
          url: '/store/item/archie_bocka_shirt',
        },
      ]
    }
  }

  render() {
    const openProducts = {
      display: this.state.showProduct ? 'none' : 'flex',
    }
    const showCheckoutProduct = {
      display: this.state.showProduct ? 'block' : 'none',
    }
    return (
      <div className={cx("StorePage")}>
        <Grid fluid>
          <Row>
            <Col xsOffset={3} xs={6} smOffset={5} sm={2}>
              <img className={cx("header")} src="img/logos/logo-2.png"/>
            </Col>
          </Row>
          <Row className={cx("productContainer")} style={openProducts}>
            {this.state.products.map((product, index) => (
              <Col xs={12} sm={4} key={index}>
                <Link to={product.url}>
                  <ItemCard
                    image={product.image}
                    description={product.description}
                    price={product.price}
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
