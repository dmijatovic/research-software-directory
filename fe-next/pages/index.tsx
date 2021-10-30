import type { NextPage } from 'next'
import Layout from '../components/Layout'
import DummyArticle from '../components/DummyArticle'
import PageHeader from '../components/PageHeader';

const Home: NextPage = () => {
  return (
   <Layout>
     <PageHeader>
      <h3 className="page-title">Home</h3>
     </PageHeader>
     <section>
       <DummyArticle textSide="left" />
       <h3 className="clear-both">More lorem here</h3>
       <DummyArticle textSide="right" />
       <h3 className="clear-both">Another lorem</h3>
       <DummyArticle textSide="left" />
     </section>
   </Layout>
  )
}

export default Home
