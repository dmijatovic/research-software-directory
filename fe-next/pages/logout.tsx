import type { NextPage } from 'next'
import {signOut,signIn, useSession} from 'next-auth/react'
import router from 'next/router'
import {useEffect} from 'react'

import Layout from '../components/Layout'

const Login: NextPage = () => {
  const {data,status} = useSession()

  useEffect(()=>{
    if (data && data.user){
      console.log("signing you out!!!")
      signOut()
    }
  })

  function getContent(){
    if (data && data.user){
      return (
        <button className="btn btn-indigo p-4 rounded" onClick={()=>signOut()} >SignOut</button>
      )
    }
    return (
      <>
        <h3>You are logged out!</h3>
        <button className="btn btn-indigo p-4 rounded" onClick={()=>router.push("/login")} >LogIn</button>
      </>
    )
  }

  return (
   <Layout>
      <h2>Logout</h2>
      <section>
        {getContent()}
      </section>
   </Layout>
  )
}

export default Login
