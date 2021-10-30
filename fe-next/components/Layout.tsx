import AppHeader from "./AppHeader"
export default function Layout({children}) {
  // const styles = useStyles();
  return (
    <>
      <AppHeader />
      <main className="container flex-col bg-white text-gray-800">
        {children}
      </main>
      <footer className="footer">
        <section className="container">
          <h6>Footer content</h6>
        </section>
      </footer>
    </>
  )
}