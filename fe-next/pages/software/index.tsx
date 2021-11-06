// import {useState} from 'reac'
import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import SoftwareCard from '../../components/SoftwareCard';

const softwareList=[
  {
    slug: 'software-slug-1',
    title:'Software title',
    organization:'Belongs to Organization',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi!',
    developers:['Jane Doe','John Doe','Hulk Hogan','Dark Matter']
  }
]

// will be passed to the page component as props
export async function getStaticProps(context) {
  return {
    props: {
      software: softwareList
    },
  }
}

export default function SoftwareList({software=[]}){
  return (
    <Layout>
      <PageHeader>
        <h1 className="page-title">Software</h1>
      </PageHeader>
      <section>
        {
          software.map((item,pos)=><SoftwareCard key={pos} {...item} />)
        }
      </section>
    </Layout>
  )
}

