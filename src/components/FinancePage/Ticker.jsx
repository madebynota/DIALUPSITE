import React from 'react';
import classNames from 'classnames/bind';

function getStockColor(value) {
    if (value > 0){
      return "81D117";
    } else {
      return "#CE0B24";
    }
}

const stocks = [
    { 
      "name" : "HANNN",
      "value": 74.55,
      "color": "#81D117",
      "abbreviation": "HAN"
    },

    {
      "name" : "BUCKET HATS",
      "value": -41.98,
      "color": "#CE0B24",
      "abbreviation": "BH"
    },

    {
      "name" : "DRAKE",
      "value": 54.17,
      "color": "#81D117",
      "abbreviation": "DRZY"
    },
    
    {
      "name" : "SNAPCHAT SPECTACLES",
      "value": -14.48,
      "color": "#CE0B24",
      "abbreviation": "SPEC"
    },
    
    {
      "name" : "WHITE TEES",
      "value": 90.02,
      "color": "#81D117",
      "abbreviation": "TEES"
    },
    
    {
      "name" : "SK8HI VANS",
      "value": 63.67,
      "color": "#81D117",
      "abbreviation": "VANS"
    }
];

class StockItem extends React.Component {
  render() {
    return (
      <div > {/* make sure you go style this shit bro --> className={cx('stockItem')} */}
        <li>
            {this.props.name}
            {this.props.value}
        </li>
      </div>
    );
  }
};

class Ticker extends React.Component {
    generateStockItems(stocks) {
        let stockElements = [];
        for (let stock of stocks) {
          stockElements.push(<StockItem name={stock.name} value={stock.value}/>);
        }
        return stockElements;
    }
    render() {
        return (
            <div>
              <ul className={this.props.styles} className="ticker">
                {this.generateStockItems(stocks)}
              </ul>
            </div>
        );
    }
}

export default Ticker;
