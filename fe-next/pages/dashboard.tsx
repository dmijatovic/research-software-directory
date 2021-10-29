import { useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../components/Layout'
import {useSession, getSession, signIn} from 'next-auth/react'
import router from 'next/router'
import { Session } from 'next-auth'

const Dashboard: NextPage = () => {
  const {data,status} = useSession()
  useEffect(()=>{
    if (status==="unauthenticated") router.push("/login")
  })

  function getContent(){
    if (data && data.user){
      return (
        <pre>{JSON.stringify(data,null,2)}</pre>
      )
    }
  }

  // console.log("data...", data)

  return (
   <Layout>
     <h2>Your dashboard</h2>
     <section>
       {getContent()}
     </section>

   </Layout>
  )
}

export async function getServerSideProps(context){
  // console.log("SSR...context...", context)
  const data = await getSession(context)
  if (data){
    return {
      props:{
        logedIn:true,
        data
      }
    }
  }
  // }else{
  //   // redirect
  //   const {res} = context
  //   res.setHeader("location","/login")
  //   res.statusCode = 302
  //   res.end()
  // }
  return {
    redirect:{
      destination:"/login",
      permanent: false
    }
  }
}

export default Dashboard