import {getSession} from 'next-auth/react'

export default function Protected({children}){
  console.log("Protected component accessed")
  return children
}

export async function getServerSideProps(context){
  console.log("Protected.getServerSideProps...accessed")
  const data = await getSession(context)
  if (data){
    return {
      props:{
        logedIn:true,
        data
      }
    }
  }
  // redirect to login
  return {
    redirect:{
      destination:"/login",
      permanent: false
    }
  }
}
