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
      products: []
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
      <h1>Store Page</h1>
    )
  }
}

export default StorePage;
