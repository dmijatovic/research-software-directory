import router from "next/router"
import Chip from "./Chip"

export default function ProjectCard({title,organization,description,researchers,slug}:
  {title:string,organization:string,description:string,researchers:string[],slug:string}){
  return (
    <section className="card">
      <h2 className="text-primary-dark cursor-pointer"
        title="Click to view project page"
        onClick={()=>router.push(`/project/${slug}`)}>{title}
      </h2>
      <h3 className="text-warning-500 cursor-pointer"
        title="Click to view research group page"
        onClick={()=>router.push(`/research-group/${slug}`)}>{organization}</h3>
      <p>
        {description}
      </p>
      <h5 className="mt-4">Researchers</h5>
      <div className="flex flex-wrap items-center py-2">
        {researchers.map(item=>{
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