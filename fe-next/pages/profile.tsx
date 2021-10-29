import Link from 'next/link'
import {useSession} from 'next-auth/react'
import Protected from "../components/Protected";
import Layout from '../components/Layout'

export default function Profile(){
  const {data,status} = useSession()

  return (
    <Protected>
      <Layout>
        <section className="flex items-center justify-between">
          <h2>This is your profile</h2>
          <nav>
            <Link href="/dashboard">
              Dashboard
            </Link>
          </nav>
        </section>
        <section>
          You authentication status is: {status}
        </section>
        <section>
          <pre>{JSON.stringify(data,null,2)}</pre>
        </section>
      </Layout>
    </Protected>
  )
}