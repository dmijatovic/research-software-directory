import Link from 'next/link'
import {useSession} from 'next-auth/react'
import Protected from "../components/Protected";
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader';

export default function Profile(){
  const {data,status} = useSession()

  return (
    <Protected>
      <Layout>
        <PageHeader>
          <h3 className="page-title">Profile</h3>
          <nav>
            <Link href="/dashboard">
              <a className="p-4 rounded hover:bg-gray-200 hover:text-gray-700">
                Dashboard
              </a>
            </Link>
          </nav>
        </PageHeader>
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