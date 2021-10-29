
export default function Avatar({username="",image="https://picsum.photos/id/237/200/200"}:{username:string,image:string}){
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
      className="rounded"
      title={username}
      style={styles}
    />
  )
}