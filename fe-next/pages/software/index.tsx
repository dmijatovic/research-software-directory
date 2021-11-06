import Head from 'next/head'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import SoftwareCard from '../../components/SoftwareCard';
import RsdSoftwareType from '../../types/RsdSoftwareType';
import metaInfo from '../../utils/metaInfo';

const softwareListExample=[
  {
    slug: 'software-slug-1',
    title:'Software title',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi!',
    organizations:['Belongs to Organization'],
    developers:['Jane Doe','John Doe','Hulk Hogan','Dark Matter']
  }
]
type SoftwareItemType= typeof softwareListExample[0]

export async function getServerSideProps(ctx) {
  const url = 'https://www.research-software.nl/api/software?limit=12&sort="brandName"&direction="desc"'
  const resp = await fetch(url)
  const data:RsdSoftwareType[] = await resp.json()
  // console.log("data...", data)
  return {
    props:{
      software: data.map(item=>({
        slug: item.slug,
        title: item.brandName,
        description: item.shortStatement,
        organizations: item.related.organizations.map(item=>item?.foreignKey.id),
        developers: item.contributors.map(item=>item.foreignKey.id)
      }))
    }
  }
}

export default function SoftwareList({software=[]}:{software:SoftwareItemType[]}){
  return (
    <>
    <Head>
      <meta name="robots" content="all" key="robots" />
      <title>Software | Reaserch Software Directory</title>
      <meta name="descripton" content="List of all software" key="description" />
      {/* canonical url */}
      <link rel="canonical" href={`"${metaInfo.baseUrl}/software"`} />
    </Head>
    <Layout>
      <PageHeader>
        <h1 className="page-title">Software</h1>
      </PageHeader>
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          software.map((item,pos)=><SoftwareCard key={pos} {...item} />)
        }
      </section>
    </Layout>
    </>
  )
}

