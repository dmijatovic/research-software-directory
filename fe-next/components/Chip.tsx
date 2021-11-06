import router from 'next/router'

const styles={
  margin:'0rem 0.25rem 0.75rem 0rem',
  padding: '0.5rem 0.5rem',
  borderRadius: '1rem',
  // border:'1px solid #ccc',
  // backgroundColor: 'var(--tw-ring-color,#fefe)',
  // color:'#333',
  // fontSize:'1rem'
}

export default function Chip({value,title,link}:{value:string, title:string, link?:string}){
  if (link) {
    return (
      <div
        title={title}
        style={styles}
        className="cursor-pointer text-primary-dark bg-primary-light text-sm"
        onClick={()=>router.push(link)}
      >{value}</div>
    )
  }
  return <div title={title} style={styles}>{value}</div>
}