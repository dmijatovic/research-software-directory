import type { NextPage } from 'next'
import {signIn, useSession} from 'next-auth/react'


import Layout from '../components/Layout'

const Login: NextPage = () => {
  const {data,status} = useSession()

  function getContent(){
    if (data && data.session){
      return (
        <pre>{JSON.stringify(data.session,null,2)}</pre>
      )
    }
    return (
      <button className="btn btn-indigo p-4 rounded" onClick={()=>signIn('github',{
        callbackUrl:"http://localhost:3000/dashboard"
      })} >SignIn with Github</button>
    )
  }

  return (
   <Layout>
      <h2>Login</h2>
      <section>
        {getContent()}
      </section>
   </Layout>
  )
}

export default Login
