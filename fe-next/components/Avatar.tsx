import router from 'next/router'

export default function Avatar({
  username="", image="https://picsum.photos/id/237/200/200", classes, ...props}:
  {username:string,image:string, classes:string}){
  const styles = {
    width:'4rem',
    height: '4rem',
    backgroundImage: 'url(' + image + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius:'50%'
  };
  return (
    <div
      className={`rounded ${classes}`}
      title={username}
      style={styles}
      onClick={()=>router.push("/profile")}
    />
  )
}