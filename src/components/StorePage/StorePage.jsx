import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ItemCard from './ItemCard';
import Checkout from './Checkout';
import styles from './styles/StorePage.css';

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
      },
      products: [
        {
          image: 'img/products/tee1.png',
          description: 'SuperLucha Tee (White)',
          price: '$19.99',
        },
        {
          image: 'img/products/stickers.png',
          description: 'StickerPack (5 count)',
          price: '$3.99',
        },
        {
          image: 'img/products/tee2.png',
          description: 'Archie Blocka Dirty Laundry Shirt',
          price: '$14.99',
        },
      ]
    }
    this.openPage = this.openPage.bind(this);
    this.closeCheckout = this.closeCheckout.bind(this);
  }

  openPage(product) {
    this.setState({
      showProduct: !this.state.showProduct,
      checkoutProduct: product,
     });
  }

  closeCheckout() {
    this.setState({ showProduct: !this.state.showProduct, });
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
                <ItemCard
                  image={product.image}
                  description={product.description}
                  price={product.price}
                  onClick={this.openPage}
                />
              </Col>
            ))}
          </Row>
          <Row style={showCheckoutProduct}>
            <Checkout
              product={this.state.checkoutProduct}
              closeCheckout = {this.closeCheckout}
             />
          </Row>
        </Grid>
        <p className={cx("storeFooter")}>STORE</p>

      </div>
    )
  }


}

export default StorePage;
