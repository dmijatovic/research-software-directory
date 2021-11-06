import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import Select from 'react-select'
import setDebounce from '../utils/debounce'
import rorOptions from '../utils/rorOptions'

const styles={
  minWidth:'6rem',
  maxWidth:'30rem'
}

const debounce = setDebounce(500)

export default function Organization(){
  const [searchInput,setSearchInput] = useState("")
  const [organization,setOrganization] = useState()
  const [options,setOptions] = useState({
    loading:false,
    items:[]
  })

  console.group("Organization...")
  console.log("loading...",options.loading)
  console.log("options...",options.items)
  console.log("searchInput...",searchInput)
  console.groupEnd()

  useEffect(()=>{
    // debugger
    if (searchInput!==""){
      setOptions({
        loading:true,
        items:[]
      })
      rorOptions(searchInput)
        .then(items=>{
          setOptions({
            loading:false,
            items
          })
        })
    }
  },[searchInput])

  function onInputChange(newValue:string){
    // console.log("onInputChange...", newValue)
    // set loading
    if (newValue==="") {
      setOptions({
        loading:false,
        items:[]
      })
    } else{
      // set loading - keep items
      setOptions({
        loading:true,
        items: options.items
      })
      // debounce input value
      debounce(newValue,setSearchInput)
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
          <Select
            //required for Next SSR
            instanceId="organization"
            name="organization"
            placeholder="Type organization name"
            autoFocus={true}
            isLoading={options.loading}
            isClearable={true}
            isSearchable={true}
            onInputChange={onInputChange}
            onChange={(newValue)=>{
              // console.log("Item selected...", newValue)
              setOrganization(newValue?.data)
            }}
            options = {options.items}
            loadingMessage={({inputValue})=>{
              return (
                <span>Searching ROR for <strong>{inputValue}</strong></span>
              )
            }}
            filterOption={(option, inputValue)=>{return true;}}
            // loadOptions={getOrganization}
          />
        </div>
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