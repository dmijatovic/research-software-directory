import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader';
import ProjectCard from '../../components/ProjectCard';

const softwareList=[
  {
    slug: 'project-slug-1',
    title:'Project title',
    organization:'Belongs to Research Group',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi!',
    researchers:['Jane Doe','John Doe','Hulk Hogan','Dark Matter']
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
        <h1 className="page-title">Projects</h1>
      </PageHeader>
      <section>
        {
          software.map((item,pos)=><ProjectCard key={pos} {...item} />)
        }
      </section>
    </Layout>
  )
}

