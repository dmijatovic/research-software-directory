export default function setDebounce(delay:number){
  let timer = undefined
  return function useDebounce(value:string,setValue:Function){
    if (timer){
      console.log("useDebounce.clearTimeout...", timer)
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      setValue(value)
    },delay)
  }
}