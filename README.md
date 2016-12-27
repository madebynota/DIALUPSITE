# DIAL UP WEBSITE
See this project live at http://dialupstuff.com/.

###General Overview
**Technology TLDR**:
The project uses Node with Express for the server-side, and React on the client-side. Routing for the project is also handled on the client-side by react-router. Webpack handles building our client-side JS and CSS. Since this project primarily uses ES6 (aka ES2015) Javascript, Webpack uses Babel to transpile the JS so it can be interpreted by the browser.

**Building & Running**:
To setup up this project, `git clone` it onto your machine, `cd` into the project, and then run `npm install`. Once all of the required modules are downloaded, you need to start a server for the project. There are two ways do this:
- _webpack-dev-server_: Use this while working on client-side development by running `webpack-dev-server` from the project's root directory. Each time you save, this server will rebuild the project and refresh the localhost page in your browser. Put this in a separate terminal tab. Note that rebuild/refresh on save doesn't editing working with files in the `src/static` directory; you'll have to restart the server by hand.
- _Node.js server_: This will start the project through or `server.js` code. If you are making server-side code changes, use this. Just run `npm start`.

**Code Styling & Deployment**:
See our [styles and process guidelines repo](https://github.com/DialUpStuff/CODINGRULES). Leave the `prod` and `staging` branches untouched unless you are deploying something to either of those environments. 

###Server-Side (Node & Express)
Currently, the Node server is simply used to serve the project when we deploy it. Note that `src/server.js` has a single request handler that catches all routes and simply renders `index.html`, where react-router will handle all detailed routing.

```
// Universal routing and rendering handled by React & react-router on the client-side.
app.get('*', function(req, res) {
    res.render('index.html');
});
```

In the future, we can also use the server as an API.

###Client-Side (React & react-router)
**Components**: All React components should be placed in the `src/components` directory, with dedicated directories for specific sections of the site (for example, our all the components for the home page are in `src/static/HomePage/`).

**Routing**: With react-router, routes are defined just like other component. We define routes in `src/routes.js`, and the routes component is rendered in `src/components/SiteRoutes.jsx`. Here's a helpful [tutorial on react-router](https://css-tricks.com/learning-react-router/).

**Static Files**: When we build/rebuild our project with Webpack, it produces a file called `src/static/js/bundle.js`. `bundle.js` contains our entire React project bundled into one uglified JS file. Our root HTML file, `src/static/index.html`, imports this file as a script and the uglified React updates the contents of the DOM element with `id="main"`. Our Webpack build process also builds CSS from around the project into a uglified CSS file called `src/static/css/styles.css`, which is also imported into our root HTML file. There's an additional `src/static/base.css` file that holds CSS that needs to affect DOM elements that are higher than the scope of React components (like `<body>` or `<html>`). Static assets like images, videos, p5.js animations, etc are also in the `src/static` directory. 

###Working with CSS
Create a `styles/` directory in the dedicated component directory. It's our practice to create separate CSS files to match individual compoenents (ie. `LinksSection.jsx` uses `Links.css`).

To apply classes to the elements in your JSX code, we use the [classnames](https://github.com/JedWatson/classnames) module. Here's how it's used:

```
//Import classnames module and CSS file
import classNames from 'classnames/bind';
import styles from './styles/Link.css';

//Bind styles
let cx = classNames.bind(styles);
```

In JSX, you can apply a single CSS class like...
```
<div className={cx('linkItem')}></div>
```

Or multiple CSS classes with...
```
<div className={classNames('container-fluid', cx('verticalCenter'))}></div>
<div className={classNames('col-md-6', 'col-md-offset-3')}></div>
```

###Utilities & Helper Functions
All utility/helper functions that don't have direct relation to the function of a component, or may need to be used in different places around the project should be added as static functions to Utils class in `src/utils.js`.

###Releasing New Magazines
This system will change entirely the new magazine reader project is complete. To add new magazine into the current project:
1. Use Homebrew to install ImageMagick `brew install imagemagick`.
2. Convert all pages in the magazine to `.jpg` format with naming convention `page-n.jpg`. This conversion can be done easily with `mogrify -format jpg *.png`.
3. Move all of the reformatted images to `src/static/reader/magazineAssets/<newmagname>/`.
4. Add a corresponding data JSON file using convention `src/static/reader/magazineAssets/data/<newmagname>.json`. Follow existing files, and add a block for each page in the magazine.
5. Add a corresponding color JSON file using convention `src/static/reader/magazineAssets/data/<newmagname>-colors.json`. Follow existing files, and add a block for each pair of pages.
6. In `src/static/reader/mobile.html`, add a new key-value pair in the `magDict` variable containing the new magazine's name, and the total number of pages it contains.
7. In `src/server.js`, add the new magazine's name (`/magazines/<newmagname>`).
8. Add a corresponding link on the `/magazines` page.
9. Update Open Graph and Twitter description tags in `index.html` and `reader.html` to highlight that a new magazine has been released.
10. Test changes after restarting the server with `npm start`.






