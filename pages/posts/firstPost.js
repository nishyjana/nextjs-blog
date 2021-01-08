import Layout from '../../component/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function firstPost() {
  return (
    <div>
        <Layout>
      <Head>
        <title>First  fucking  bitch    Post</title>
      </Head>
      <h1>First  fucing vbtich   Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
      
    </div>
  );
}
