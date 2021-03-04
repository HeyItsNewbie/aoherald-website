import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script type='text/javascript' src='/inc/js/index.js' />
          <script>
            window.load = changeWallPaper();
          </script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
