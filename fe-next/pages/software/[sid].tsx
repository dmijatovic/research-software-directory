import Head from 'next/head'
import {useRouter} from 'next/router'

import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import RsdSoftwareType from '../../types/RsdSoftwareType';
import metaInfo from '../../utils/metaInfo';
import {breadcrumbList,softwareSourceCode} from '../../utils/jsonLD'

export async function getServerSideProps(ctx) {
try{
  // check for slug
  const slug = ctx.params.sid
  if (!slug) return {}
  // console.log("slug...", slug)
  const url = `https://www.research-software.nl/api/software/${slug}`
  const resp = await fetch(url)
  const data:RsdSoftwareType = await resp.json()
  // console.log("data...", data)
  return {
    props:{
      software: data
    }
  }
}catch(e){
  console.error("Failed to getServerSideProps...", e.message)
  return {
    props:{
      software:undefined
    }
  }
}}

function getMetaTags(software:RsdSoftwareType){
  if (!software) {
    return(
      <title>{`Software | ${metaInfo.appName}`}</title>
    )
  }
  return (<>
    <title>{`${software.brandName} | ${metaInfo.appName}`}</title>
    <meta name="descripton" content={`"${software.shortStatement}"`} key="description" />
    {/* canonical url */}
    <link rel="canonical" href={`"${metaInfo.baseUrl}/${software.primaryKey.collection}/${software.primaryKey.id}"`} key="canonical" />
    <script
      key="jsonld-breadcrumblist"
      type="application/ld+json"
      dangerouslySetInnerHTML={breadcrumbList({
        id:software.primaryKey.id,
        name: software.brandName
      })}
    />
  </>)
}

export default function SoftwarePage({software}:{software:RsdSoftwareType}){
  const router = useRouter()
  return (
    <>
    <Head>
      {getMetaTags(software)}
    </Head>
    <Layout>
      <PageHeader>
        <h1 className="page-title">{software.brandName}</h1>
      </PageHeader>
      <section>
        {/* Software id: {router.query['sid']} */}
        <pre>
          {JSON.stringify(software,null,2)}
        </pre>
      </section>
    </Layout>
    </>
  )
}