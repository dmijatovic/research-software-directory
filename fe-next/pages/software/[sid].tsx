import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import {useRouter} from 'next/router'

export default function SoftwarePage(){
  const router = useRouter()
  return (
    <Layout>
      <PageHeader>
        <h1 className="page-title">Software Page</h1>
      </PageHeader>
      <section>
        Software id: {router.query['sid']}
      </section>
    </Layout>
  )
}