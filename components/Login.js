import Image from "next/image"
import { signIn } from "next-auth/react"
import Head from "next/head"

function Login() {
  return (
    <>
      <Head>
        <title>Pacio&apos;s clone login page</title>
        <link rel="icon" href="https://links.papareact.com/5me" />
      </Head>

      <div className="grid place-items-center">
        <Image
          src="https://links.papareact.com/t4i"
          width={400}
          height={400}
          objectFit="contain"
          alt=""
        />
        <h1
          onClick={signIn}
          className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer hover:bg-blue-600 transition-colors"
        >Login with Facebook</h1>
      </div>
    </>
  )
}

export default Login