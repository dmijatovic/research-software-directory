import {useRouter} from 'next/router'

export default function RSDLogo(){
  const router = useRouter()
  return (
    <div className="cursor-pointer">
      <div className="rsd-logo ml-6" onClick={()=>router.push("/project")}>Research</div>
      <div className="rsd-logo mb-1" onClick={()=>router.push("/software")}>Software</div>
      <div className="rsd-logo ml-6" onClick={()=>router.push("/")}>Directory</div>
    </div>
  )
}