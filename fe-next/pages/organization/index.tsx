import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'

import SelectOrganization from '../../components/SelectOrganization';

const styles={
  minWidth:'6rem',
  maxWidth:'30rem'
}


export default function Organization(){
  const [organization,setOrganization] = useState()

  return (
    <Layout>
      <PageHeader>
        <h1 className="page-title">Organization</h1>
        <nav>
        <Link href="/software">
          <a className="p-4 rounded hover:bg-gray-200 hover:text-gray-700">
            Software
          </a>
        </Link>
      </nav>
      </PageHeader>
      <section className="py-4">
        <SelectOrganization onSelect={setOrganization} />
      </section>
      <section>
        {organization ?
          <div>
            <h4>Selected organization</h4>
            <pre>{JSON.stringify(organization,null,2)}</pre>
          </div>
          : null
        }
      </section>
    </Layout>
  )
}