import React from 'react';

class LogoSection extends React.Component {
	chooseLogoImage() {
    	let choice = Math.floor(Math.random()*7);
    	let path = "img/logos/logo-" + choice + ".png";
    	return path;
    }
    shouldComponentUpdate(nextProps, nextState) {
	    return false;
	}
    render() {
        return (
			<img className={this.props.styles} src={this.chooseLogoImage()} />
        );
    }
}

export default LogoSection;