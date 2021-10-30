// import Image from 'next/image'

export default function DummyArticle({textSide="left"}:{textSide:"left"|"right"}){
  const allClasses = `block text-justify mb-6 overflow-hidden`

  function pText(){
    return (
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nobis enim, eveniet placeat reiciendis consequuntur corrupti beatae quidem, molestias magni, consectetur saepe libero officiis natus sit dolorum dolorem consequatur dolor. Itaque dolorum, dolores, tempore quia, tempora ad ab ducimus adipisci eos dignissimos voluptatum eaque sed perspiciatis consequuntur. Voluptatem quasi tenetur, ab voluptatibus quaerat, eius, vitae aut itaque similique quas labore nulla sunt in ea? Quaerat tempora doloremque animi necessitatibus, aliquid suscipit aut debitis nobis et! Delectus adipisci perspiciatis quam. Officia porro deleniti magni nemo at perferendis repellendus saepe corporis libero maxime, id dignissimos inventore dolore aperiam impedit eaque nisi! Fugiat error repudiandae alias eos natus nemo necessitatibus ratione! Ducimus nulla temporibus quos totam tempora numquam, voluptatum voluptate at expedita vitae assumenda iusto atque accusantium? Corrupti, dolorem ad labore laudantium cum quibusdam possimus facere porro explicabo quos culpa vero beatae rerum exercitationem eos! Minima ipsa ullam rem ea saepe deserunt quasi distinctio tempore eveniet corporis delectus eaque, culpa laboriosam nulla voluptatum amet voluptatibus eligendi nam? Porro ipsa corrupti tempora voluptas adipisci cumque nobis odit facilis? Excepturi illo quasi enim eligendi consequuntur qui et sunt laboriosam mollitia obcaecati nemo iste animi, totam quos perferendis necessitatibus cum, repudiandae tenetur modi fugit numquam placeat! Amet tempore hic veritatis earum illo inventore id suscipit quas tempora necessitatibus itaque maxime vel fuga nemo, voluptatem nisi beatae neque ut facilis? Ad nemo quas tempora odit autem consectetur earum harum sequi facilis voluptatem similique eaque, iusto asperiores tenetur magnam animi aliquam cum nulla. Saepe asperiores blanditiis non aliquam."
    )
  }

  function imageClasses(){
    if (textSide==="left") {
      return 'float-right object-cover ml-8 mb-4 w-1/3 h-96'
    }
    return 'float-left object-cover mr-8 mb-4 w-1/3 h-96'
  }

  function imageSrc(){
    if (textSide==="left") {
      // return "https://picsum.photos/seed/picsum/500"
      return "https://source.unsplash.com/user/erondu"
    }
    return "https://source.unsplash.com/random/"
  }

  function randomImage(){
    return (
      <img
        className={imageClasses()}
        src={imageSrc()}
        alt="random image"
      />
    )
  }

  return (
    <p className={allClasses}>
      {randomImage()}
      {pText()}
    </p>
  )

}