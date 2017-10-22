import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/ItemDetailView.css';

let cx = classNames.bind(styles);

class ItemDetailView extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.params)

    const itemId = this.props.params.id;

    if (itemId === "tee") {
      this.state = {
        image: '../../../img/products/tee1.png',
        description: 'SuperLucha Tee (White)',
        price: '$19.99',
      };
    } else if (itemId === "stickerpack1"){
      this.state = {
        image: '../../../img/products/stickers.png',
        description: 'StickerPack (5 Count)',
        price: '$3.99',
      };
    } else {
      this.state = {
      image: '../../../img/products/tee2.png',
      description: 'Archie Blocka Dirty Laundry Shirt',
      price: '$14.99',
    };
  };
}

  render() {
    return (
      <div className={cx("container")}>
        <Grid fluid>
          <Row>
            <Col xs={12} smOffset={1} sm={5}>
              <img className={cx("checkoutImage")} src={this.state.image}/>
            </Col>
            <Col xs={12} smOffset={1} sm={5}>
              <h1 className={cx("checkoutDescription")}> {this.state.description} </h1>
              <h1 className={cx("checkoutDescription")}> {this.state.price} </h1>
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

export default ItemDetailView;
