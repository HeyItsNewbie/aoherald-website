import Head from 'next/head'

export default function Home () {
  return (
    <>
      <Head>
        <title>AO Herald -- A Discord Bot</title>
        <meta name='keywords' content='AO Herald' />
      </Head>
      <div className="p-4 mt-10">
        <h1 className="text-3xl text-red-600 text-center">Welcome to Albion Online Herald</h1>
        <h2 className="text-xl text-black text-center">An Albion Online Discord Bot</h2>
        <h3 className="text-sm text-red-600 text-center pb-8">AO Herald is not affiliated with Sandbox Interactive (SBI) in any manner at all.</h3>
        <p className="text-base text-grey-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <p className="text-base text-grey-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      </div>
    </>
  )
}
