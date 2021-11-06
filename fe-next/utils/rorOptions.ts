
const apiUri='https://api.ror.org/organizations'
// const type = 'affiliation'
const type = 'query'

export default async function rorOptions(search:string){
  const resp = await fetch(`${apiUri}?${type}=${search}`)
  const data = await resp.json()
  const options = data.items.map(item=>{
    // debugger
    return {
      value: item.id,
      label: item.name,
      data: item
    }
  })
  console.log("useROR.return options...", options)
  return options
}