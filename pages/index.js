import { getSession, useSession } from "next-auth/react"

import Head from 'next/head'
import Feed from "../components/Feed"
import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from "../components/Sidebar"
import Widgets from "../components/Widgets"
import { db } from "../firebase"

export default function Home({ session, posts }) {
  const sessionState = useSession(session)
  if (sessionState.status === 'unauthenticated') return <Login />

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <link rel="icon" href="https://links.papareact.com/5me" />
        <title>Pacio&apos;s Facebook Clone</title>
      </Head>
      <Header />
      <main className="flex">
          <Sidebar />
          <Feed posts={posts} />
          <Widgets />
      </main>  
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();
  const docs = posts?.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props: {
      session: await getSession(ctx),
      posts: docs
    }
  }
}