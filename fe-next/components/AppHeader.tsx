import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import Avatar from './Avatar'
import Logo from './Logo'

const menuItems=[
  {path:"/software", label:"Software"},
  {path:"/project", label:"Projects"},
  {path:"/login", label:"Login", status:'unauthenticated'},
  // show only if authenticated
  {path:"/organization", label:"Organization", status:'authenticated'},
  {path:"/logout", label:"Logout", status:'authenticated'},
]


export default function AppHeader(){
  const {data,status} = useSession()
  const router = useRouter()

  console.log("status...", status)

  function getMenuItems(){
    if (status==="loading") return null
    const items = menuItems.map(item=>{
      if (item?.status){
        if (item.status === status){
          return (
            <Link key={item.path} href={item.path}>
              <a className={router.pathname===item.path ? "active":""}>{item.label}</a>
            </Link>
          )
        }
      }else{
        return (
          <Link key={item.path} href={item.path} passHref>
            <a className={router.pathname===item.path ? "active":""}>{item.label}</a>
          </Link>
        )
      }
    })
    return items
  }

  function getRightSideOptions(){
    let html=[]
    html.push(
      <nav key="nav" className="flex flex-1 justify-end items-end">
        { getMenuItems() }
      </nav>
    )
    if (status==="authenticated"){
      html.push(
        <div>
          <Avatar
            key="avatar"
            classes="cursor-pointer"
            image={data?.user?.image}
            username={data?.user?.name}
          />
        </div>
      )
    }
    return html
  }

  return (
    <header className="header">
      <section className="container header-row text-gray-200">
        <Logo />
        <nav key="nav" className="flex flex-1 justify-end items-end">
          { getMenuItems() }
        </nav>
        {
          status==="authenticated" ?
          <Avatar
            key="avatar"
            classes="cursor-pointer"
            image={data?.user?.image}
            username={data?.user?.name}
          />:
          null
        }
      </section>
    </header>
  )
}