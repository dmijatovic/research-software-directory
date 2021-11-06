import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import {useRouter} from 'next/router'

export default function SoftwarePage(){
  const router = useRouter()
  return (
    <Layout>
      <PageHeader>
        <h1 className="page-title">User page</h1>
      </PageHeader>
      <section>
        Developer id: {router.query['uid']}
      </section>
    </Layout>
  )
}