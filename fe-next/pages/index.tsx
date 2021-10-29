import type { NextPage } from 'next'
import Layout from '../components/Layout'
import DummyArticle from '../components/DummyArticle'

const Home: NextPage = () => {
  return (
   <Layout>
     <section>
       <h2>Home page</h2>
       <DummyArticle textSide="left" />
       <h3>More lorem here</h3>
       <DummyArticle textSide="right" />
     </section>
   </Layout>
  )
}

export default Home
