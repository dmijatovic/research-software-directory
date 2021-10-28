// import { Typography } from "@material-ui/core"
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme)=>({
//   root: { }
// }));

export default function Layout({children}) {
  // const styles = useStyles();
  return (
    <>
    <header>
      <h1>Header title</h1>
    </header>
    <main>
      {children}
    </main>
    <footer>
      <h4>Footer content</h4>
    </footer>
    </>
  )
}