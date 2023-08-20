import ProductList from "../views/ProductList"
import Footer from "./Footer"
import Header from "./Header"

function RootLayout() {
  return (
    <>
      <Header/>
      <main>
        <ProductList/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout