import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import AsyncSelect from 'react-select/async'


const styles={
  minWidth:'6rem',
  maxWidth:'30rem'
}

export default function Organization(){
  // const [search,setSearch] = useDebounce("", 500)
  const [state,setState]=useState({
    loading:false,
    options:[]
  })

  async function getOrganization(search:string){
    try{
      // exit if we still loading
      if (state.loading===true) return
      // clear if no search
      if (search==="") {
        setState({
          loading:false,
          options:[]
        })
        return
      }
      setState({
        loading:true,
        options: state.options
      })
      // make request
      const resp = await fetch(`https://api.ror.org/organizations?query=${search}`)
      const rawOptions = await resp.json()
      console.log("rawOptions...", rawOptions)
      // debugger
      const options = rawOptions.items.map(item=>{
        // debugger
        return {
          value: item.id,
          label: item.name
        }
      })
      // return state
      setState({
        loading:false,
        options
      })

      return options
    }catch(e){
      console.error("Failed to get organizations:", e.message)
      setState({
        loading:false,
        options:[]
      })
    }
  }

  // console.log("state...", state)

  return (
    <Layout>
      <PageHeader>
      <h3 className="page-title">organization</h3>
      </PageHeader>
      <section>
        {/* <h4>Select organization</h4> */}
        <div className="max-w-xl">
          <AsyncSelect
            cacheOptions
            isLoading={state.loading}
            isClearable={true}
            defaultOptions={state.options}
            loadOptions={getOrganization}
          />
        </div>
      </section>
    </Layout>
  )
}