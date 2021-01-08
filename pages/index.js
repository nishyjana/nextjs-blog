import Head from 'next/head'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      <h1 className="Title">
        hello
        <Link href="/posts/firstPost"> 
        <a>  see the fucking bitch dick webpage</a>
        </Link>
        </h1>
      {/* <h1>hello see the my webpage</h1> */}
      {/* <h1 className="title">
                    Read{' '}
  <Link href="/posts/firstPost">
    <a>this page!</a>
  </Link>
</h1> */}
     
    </div>
    
  )
}
