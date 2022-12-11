import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from 'next/document';
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initalProps = await Document.getInitialProps(ctx);
  
      return initalProps;
    }
  
    render() {
      return (
        <Html lang='es'>
            <title>CIOG - Frontend Developer</title>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            <meta name='author' content='Carlos Ivan Ochoa Gomez, CIOG' />
            <meta name='robots' content='index, follow' />

            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="shortcut icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="shortcut icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="shortcut icon" type="ico" href="/favicon/favicon.ico" sizes="32x32"/>


            <meta name="title" content="CIOG - Frontend Developer"/>
            <meta name="description" content="Hola soy Carlos Ivan un desarrollador web especializado en el desarrollo front-end"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.ciog.dev/"/>
            <meta property="og:title" content="CIOG - Frontend Developer"/>
            <meta property="og:description" content="Hola soy Carlos Ivan un desarrollador web especializado en el desarrollo front-end"/>
            <meta property="og:image" content="https://i.ibb.co/DVQHdxb/Banner-Web.png"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.ciog.dev/"/>
            <meta property="twitter:title" content="CIOG - Frontend Developer"/>
            <meta property="twitter:description" content="Hola soy Ivan un desarrollador web especializado en el front-end"/>
            <meta property="twitter:image" content="https://i.ibb.co/DVQHdxb/Banner-Web.png"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;