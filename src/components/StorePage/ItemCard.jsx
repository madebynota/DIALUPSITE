import React from 'react';
import classNames from 'classnames/bind';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles/ItemCard.css';

let cx = classNames.bind(styles);

class ItemCard extends React.Component {
 constructor(props) {
   super(props);
   this.handleClick = this.handleClick.bind(this);
 }

 handleClick() {
   var product = {
     image: this.props.image,
     description: this.props.description,
     price: this.props.price,
   }
   this.props.onClick(product);
 }

  render() {
    return (
      <div className={cx("itemCard")} onClick={this.handleClick}>
        <img className={cx("itemImage")} src={this.props.image}/>
        <p className={cx("itemDescription")}> {this.props.description} </p>
        <p className={cx("itemDescription")}> {this.props.price} </p>
      </div>
    )
  }
}

export default ItemCard;
