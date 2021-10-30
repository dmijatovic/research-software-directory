

export default function PageHeader({children}){
  return(
    <section className="flex items-center justify-between border-b mb-6">
      {children}
    </section>
  )
}