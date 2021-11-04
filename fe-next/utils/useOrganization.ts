import {useEffect, useState} from 'react'

export function useOrganization(search:string){
  const [state,setState]=useState({
    loading:true,
    options:[]
  })
  useEffect(()=>{
    fetch(`https://api.ror.org/organizations?query=${search}`)
      .then(resp=>{
        return resp.json()
      })
      .then(data=>{
        console.log("rawOptions...", data)
        const options = data.items.map(item=>{
          // debugger
          return {
            value: item.id,
            label: item.name
          }
        })
        setState({
          loading:false,
          options
        })
      })
  },[search])

  return state
}