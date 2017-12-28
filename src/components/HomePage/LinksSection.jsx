import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles/Link.css';

let cx = classNames.bind(styles);

const linkItems = [
    {
        text: "MUSIC",
        path: "https://soundcloud.com/dialupstuff"
    },
    {
        text: "VIDEO",
        path: "https://www.youtube.com/dialupstuff"
    },
    {
        text: "PHOTO",
        path: "https://instagram.com/dialupstuff"
    },
    {
        text: "CONTACT",
        path: ""
    }
];

class LinkItem extends React.Component {
    openContactAlert() {
        let contactString = "EMAIL US AT DIALUPSTUFF@GMAIL.COM\n\nFACEBOOK AT HTTPS://WWW.FACEBOOK.COM/DIALUPSTUFF";
        alert(contactString);
    }
    render() {
        let target = this.props.text.toLowerCase().replace(/\s/g,'');
        return this.props.text == "CONTACT"
            ?(
                <div className={cx('linkItem')}>
                    <a style={{"color": this.props.color}} onClick={this.openContactAlert}>
                        <p>{this.props.text}</p>
                    </a>
                </div>
            )
            :(
                <div className={cx('linkItem')}>
                    <a style={{"color": this.props.color}} target={target} href={this.props.path}>
                        <p>{this.props.text}</p>
                    </a>
                </div>
            )
    }
}

class LinksSection extends React.Component {
    generateLinkItems(items, color) {
        let links = [];
        for (let item of items) {
          links.push(<LinkItem key={item.text} text={item.text} path={item.path} color={color}/>);
        }
        return links;
    }
    render() {
        return (
            <div>
                {this.generateLinkItems(linkItems, this.props.color)}
            </div>
        );
    }
}

export default LinksSection;
