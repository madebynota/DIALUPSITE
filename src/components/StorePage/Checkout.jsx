import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./styles/Checkout.css";

let cx = classNames.bind(styles);

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'img/products/tee1.png',
      description: 'SuperLucha Tee (White)',
      price: '$19.99',
    }
    this.closeCheckout = this.closeCheckout.bind(this);
  }

  closeCheckout() {
    this.props.closeCheckout();
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12} smOffset={1} sm={5}>
              <img className={cx("checkoutImage")} src={this.props.product.image}/>
            </Col>
            <Col xs={12} smOffset={1} sm={5}>
              <h1 className={cx("checkoutDescription")}> {this.props.product.description} </h1>
              <h1 className={cx("checkoutDescription")}> {this.props.product.price} </h1>
              <div className={cx("sizeContainer")}>
                <p className={cx("optionSize")}> Size </p>
                <select className={cx("sizeButton")}>
                  <option value="Small"> Small </option>
                  <option value="Medium"> Medium </option>
                  <option value="Large"> Large </option>
                </select>
              </div>
              <div className={cx("quantityContainer")}>
                <p className={cx("optionQuantity")}> Quantity </p>
                <input default="1" className={cx("inputQuantity")}/>
              </div>
              <div className={cx("checkoutButton")}> Checkout </div>
              <div className={cx("shoppingButton")} onClick={this.closeCheckout}> Keep Shopping </div>
            </Col>
          </Row>
        </Grid>
      </div>

    )
  }

}

export default Checkout;
