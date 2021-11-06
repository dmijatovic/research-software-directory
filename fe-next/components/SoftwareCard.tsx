import router from "next/router"
import Chip from "./Chip"

export default function SoftwareCard({title,organization,description,developers,slug}:
  {title:string,organization:string,description:string,developers:string[],slug:string}){
  return (
    <section className="card">

      <h2 className="text-primary-dark cursor-pointer"
        title="Click to view software page"
        onClick={()=>router.push(`/software/${slug}`)}>{title}
      </h2>

      <h3 className="text-warning-500 cursor-pointer"
        title="Click to view organization page"
        onClick={()=>router.push(`/organization/${slug}`)}>{organization}</h3>

      <p>
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