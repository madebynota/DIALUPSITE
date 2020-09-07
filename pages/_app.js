import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="App">
      <Head>
        <title>DIAL UP</title>

        {/* <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM:.  8 ...MMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM  D....NO    MMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM..8 I.+.... ZZ...$MMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM . ..M..:... . .I?   M -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM~.N..Z..,..~D  .....MZM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM = ....MMMMM:..ON. , N. -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM7.D .$ MMMMMMMMMM:... .M -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM MM.. .M MMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMMMMMMM..... ..M..~.MMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMMMMM8.... .OMM.M~. I..MMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMN......NMM= ....+..M....DMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMM+ .... MMMI ........M... NN .. MMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMM..... ,MMMZ...........MMN.M.....MN  . MMMMMMMMMM -->
        <!-- MMMMMMMM. ....,MMMN. ............... . ....... M$...=MMMMMMM -->
        <!-- MMMM .....ZMMMM ................................MM...MMMMMMM -->
        <!-- + ....MMMMM. ...............................8MMM..:..MMMMMMM -->
        <!-- +.NMMMM................................ OMMM .....O..MMMMMMM -->
        <!-- +.8MMMMMN ....  .~D. ....  .   ...  NMMM+.. . . . M. MMMMMMM -->
        <!-- I.7M ..MMMM NMMM ..........  . .8MMMM . . ........M. MMMMMMM -->
        <!-- Z.:MM ...=MMMM.............,MMMMM................ M..MMMMMMM -->
        <!-- D.,MZM....M:.MMM.......?MMMMM~.......... .........M..MMMMMMM -->
        <!-- M..M M....M ...MMM DMMMMM=.... .. ............... M. MMMMMMM -->
        <!-- M..M.~M..?M .   .MMMM, ..       . . ...   . . . . M..MMMMMMM -->
        <!-- M..M?.M$.DM....$MMM .. ..  .. .. .....  ......... M. MMMMMMM -->
        <!-- M..MO. M.MM.  MM.MM. .....    ...   ..  ..   ...  M..MMMMMMM -->
        <!-- M..MN..MNMN.,M ..MM................ MMM..:M.M M . M .MMMMMMM -->
        <!-- M..MM.. MMZM.....$M..........=M:...MMMMM .MMIM8...M .MMMMMMM -->
        <!-- M..MM...,M,......~M.... M.. MMMMM.MMMMMMM ..?M... M .MMMMMMM -->
        <!-- M..MM.... .......:M...MMMM.MMMMMM MMM :MM . M.... M .MMMMMMM -->
        <!-- M..MM......... ...M. MMMMM MMM MMMMMM.?MM .MMMMM. M .MMMMMMM -->
        <!-- M..MM........  .. M :MMMMM.MMM.MMM MMMMMM. M.M.D. M .MMMMMMM -->
        <!-- M..MM....... . .. M  :NMMMMMMM~MMM. MMMM: . ..I . M..MMMMMMM -->
        <!-- M..MM...........  M.   .MMM MMMMMM...= .... ,M.  .M..MMMMMMM -->
        <!-- M..MM.............M ....MMM..MMM?.....  .MMMMMM.. M..MMMMMMM -->
        <!-- M..MM....... . . .M ....NMMM.. ......MMMM,MMMM .  M..MMMMMMM -->
        <!-- M..MM............ M ........... .M,.MMMMM.MMMMM.. M..MMMMMMM -->
        <!-- M..MD......... ...M .  ..... MM MMM.MMM ..MMMD .. M..MMMMMMM -->
        <!-- M..MZ.......... ..M ..., +M  MMMMMM.MM:.  ,MMMMM  M..MMMMMMM -->
        <!-- M..M?........ . . M  .MMNMM~. MM.MM7MMM. M.MMMMMM M..MMMMMMM -->
        <!-- M..M,.............M...=MM.MM..MM MMM.MMMMM$MM. ...M..MMMMMMM -->
        <!-- M..M......... ... M  . MM~MM. MMM8MM..MMM$.....  ~M..MMMMMMM -->
        <!-- ?..M...........  .M .. MMMMMMMMMM MM$...  .......?M..MMMMMMM -->
        <!--  ..M..........  . M .M.~MM.MMMMM.  . .  ... . .. ZD.ZMMMMMMM -->
        <!--  ..M............. M..MMMMM ... ........   ..... .D7.MMMMMMMM -->
        <!-- ...M........ . . .M. MMMM............. ..  .. ..~M=.MMMMMMMM -->
        <!-- ..,M..............M .  .  ..   .  ....  ... .ZMMD ..MMMMMMMM -->
        <!--  ...M......... .. M .......  . ........ ..MMMI. .. ...MMMMMM -->
        <!-- MD...~M..... .  ..M  ....  ..  .... ..7MMM... D=MMO .. MMMMM -->
        <!-- MMM ...=M=........M . ..... .. ....MMMI  ..7M=ZM.I...MMMMMMM -->
        <!-- MMMMM ...:MD.. ..:M ..... .. ..MMMN  . MMMM.MM ....MMMMMMMMM -->
        <!-- MMMMMMM ... MM...8M   .. ..MMMN   .MMM8M... ...~MMMMMMMMMMMM -->
        <!-- MMMMMMMMM ....MM.MM. ,MMMM?....M~MM.M.......MMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMM ... MMMM= . . Z.NMM N  ..  MMMMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMM=...  ... M.8.N.~.. . $MMMMMMMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMM . .M:.NO.... 8MMMMMMMMMMMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMM~  . . ..MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM -->
        <!-- MMMMMMMMMMMMMMMMMMMMM~IMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM -->

        <!-- Metadata --> */}
        <meta charSet="utf=8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge;chrome=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        {/* <!--Favicon--> */}
        <link rel="apple-touch-icon" sizes="57x57" href="img/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="img/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="img/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="img/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="img/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="img/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="img/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="img/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="img/favicon/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="img/favicon/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* <!--GSuite Verification--> */}
        <meta name="google-site-verification" content="F5u5QDAh0OznVnaLgPo1wXbXiswxt2i-3Q24UvK3oZQ" />

        {/* <!-- DON'T FORGET TO FILL OUT OpenGraph FIELDS --> */}
        <meta property="og:title" content="DIAL UP"/>
        <meta property="og:description" content="Dial Up"/>
        <meta property="og:url" content="http://dialupstuff.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content="http://dialupstuff.com/img/favicon/embedImage.png"/>
        <meta property="og:image:width" content="600"/>
        <meta property="og:image:height" content="600"/>

        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="DIAL UP"/>
        <meta name="twitter:creator" content="@DialUpStuff"/>
        <meta name="twitter:title" content="DIAL UP"/>
        <meta name="twitter:description" content="Dial Up"/>
        <meta name="twitter:image:src" content="http://dialupstuff.com/img/favicon/embedImage.png"/>
        {/* <!-- at least 280px x 150px for Twitter (image must be < 1MB) --> */}
        <meta name="twitter:domain" content="dialupstuff.com"/>

        {/* <!-- Important Initial Load Images --> */}
        <link rel="preload" as="image" href="./img/bo.png"/>
        <link rel="preload" as="image" href="./img/bo2.png"/>
        <link rel="preload" as="image" href="./img/andrew.png"/>

        {/* <!-- Bootstrap CSS --> */}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

        {/* <!-- Custom Styles --> */}
        <base href="/" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:500,900,900i&display=swap" rel="stylesheet"/>

      </Head>

      <Component {...pageProps} />
      <style jsx global> {`

        .App {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          j
        }

        @font-face {
          font-family: 'Roboto';
          src: url('/fonts/Roboto-Regular.ttf') format("truetype");
        }

        @font-face {
          font-family: 'ArialRoundedMTBold';
          src: url('/fonts/ArialRoundedMTBold.ttf') format("truetype");
        }

        @font-face {
          font-family: 'Roboto';
          font-style: italic;
          src: url('/fonts/Roboto-Italic.ttf') format("truetype");
        }

        @font-face {
          font-family: 'Roboto';
          font-weight: bold;
          src: url('/fonts/Roboto-Bold.ttf') format("truetype");
        }

        @font-face {
          font-family: 'Roboto';
          font-weight: 900;
          src: url('/fonts/Roboto-Black.ttf') format("truetype");
        }

        html {
          position: relative;
        }

        body {
          margin: 0px !important;
        }

        a {
          color: black;
        }

        h1,h2,h3,h4,h5,h6,p {
          margin: 0;
        }

        ul, li {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        ::selection {
          background: #fefc99;
        }

        * {
          font-weight: 400;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: geometricPrecision;
          font-size: 16px;
          line-height: 1.45;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          font-family: 'Roboto';
        }
      `}</style>
    </div>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
