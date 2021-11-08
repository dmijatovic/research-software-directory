import { useState } from 'react';
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import {useRouter} from 'next/router'

import SelectOrganization from '../../components/SelectOrganization';

export default function SoftwarePage(){
  const router = useRouter()
  const [organization,setOrganization] = useState()
  return (
    <Layout>
      <PageHeader>
        <h1 className="page-title">Organization Page</h1>
      </PageHeader>
      <section className="py-4">
        Organization id: {router.query['oid']}
      </section>
      <section className="py-4">
        <SelectOrganization onSelect={setOrganization} />
      </section>
      <section>
        <pre>
          {JSON.stringify(organization,null,2)}
        </pre>
      </section>
    </Layout>
  )
}