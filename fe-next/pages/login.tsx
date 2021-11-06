import { AppProviders } from 'next-auth/providers'
import { signIn, getProviders, getSession } from 'next-auth/react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const Login = ({providers}:{providers:AppProviders}) => {
  // const {data,status} = useSession()
  // return list of defined providers
  function getContent(){
    return Object.values(providers).map(provider=>(
      <button
        key={provider.id}
        className="btn p-4 mr-4 rounded hover:bg-gray-300"
        onClick={()=>signIn(provider.id,{
          callbackUrl:"http://localhost:3000/dashboard"
        })}
      >
        SignIn with {provider.name}
      </button>
    ))
  }

  return (
   <Layout>
      <PageHeader>
        <h1 className="page-title">Login</h1>
      </PageHeader>
      <section>
        {getContent()}
      </section>
   </Layout>
  )
}

// Here we get a list of defined providers from nexth-auth api endpoint
// if the user is logged in we redirect it to the dashboard page
Login.getInitialProps = async(context)=>{
  const {req,res} = context
  const session = await getSession({req})

  if(res && session && session.user){
    res.writeHead(302,{Location:"/dashboard"})
    res.end()
  }
  return {
    session:undefined,
    providers:await getProviders()
  }

}

export default Login
