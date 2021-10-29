import router from 'next/router'
import {useSession} from 'next-auth/react'
import Link from 'next/link'
import Avatar from './Avatar'

export default function AppHeader(){
  const {data,status} = useSession()

  function getRightSideOptions(){
    if (status==="authenticated"){
      return (
        <div>
          <Avatar
            image={data?.user?.image}
            username={data?.user?.name}
          />
          <button onClick={()=>router.push('/logout')}>Logout</button>
        </div>
      )
    }
    // return (
    //   <button onClick={()=>router.push("/login")}>Login</button>
    // )
  }

  return (
    <header className="header">
      <section className="container-row header">
        <h1>
          <Link href="/">
            Header title
          </Link>
        </h1>
        {getRightSideOptions()}
      </section>
    </header>
  )
}