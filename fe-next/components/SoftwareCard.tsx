import Link from 'next/link'
import router from "next/router"
import Chip from "./Chip"

export default function SoftwareCard({title,organizations,description,developers,slug}:
  {title:string,organizations:string[],description:string,developers:string[],slug:string}){
  return (
    <section className="card">

      <Link href={`/software/${slug}`}>
        <a>
          <h2 className="card-title"
            title="Click to view software page"
            onClick={()=>router.push(`/software/${slug}`)}>{title}
          </h2>
        </a>
      </Link>

      <Link href={`/organization/${organizations[0]}`}>
        <a>
          <h3 className="card-subtitle"
            title="Click to view organization page">{organizations[0]}</h3>
        </a>
      </Link>

      <p className="vh-26 overflow-ellipsis overflow-hidden">
        {description}
      </p>

      <h5 className="mt-4">Developed by</h5>
      <div className="flex flex-wrap items-center py-2">
        {developers.map(item=>{
          return <Chip
            key={item} value={item}
            title="Click to view developer page"
            link={`/user/${item}`}
          />
        })}
      </div>
    </section>
  )
}