import { useState, useEffect } from 'react'

import Select from 'react-select'
import setDebounce from '../utils/debounce'
import rorOptions from '../utils/rorOptions'

const debounce = setDebounce(500)

export default function SelectOrganization({onSelect}:{onSelect:Function}){
  const [searchInput,setSearchInput] = useState("")
  const [organization,setOrganization] = useState()
  const [options,setOptions] = useState({
    loading:false,
    items:[]
  })

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

  return (
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
          console.log("Item selected...", newValue)
          // setOrganization(newValue?.data)
          onSelect(newValue?.data)
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
  )
}