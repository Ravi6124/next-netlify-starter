import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <script>!function(e,t,a){var c=e.head||e.getElementsByTagName("head")[0],n=e.createElement("script");n.async=!0,n.defer=!0, n.type="text/javascript",n.src=t+"/static/js/chat_widget.js?config="+JSON.stringify(a),c.appendChild(n)}(document,"https://dev.engati.com",{bot_key:"5d94a926815c4210",welcome_msg:true,branding_key:"default",server:"https://dev.engati.com",e:"d" });</script>
      </main>

      <Footer />
    </div>
  )
}
