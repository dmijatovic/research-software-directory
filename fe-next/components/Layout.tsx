import AppHeader from "./AppHeader"
export default function Layout({children}) {
  // const styles = useStyles();
  return (
    <>
      <AppHeader />
      <main className="container">
        {children}
      </main>
      <footer className="footer">
        <section className="container-row">
          <h6>Footer content</h6>
        </section>
      </footer>
    </>
  )
}