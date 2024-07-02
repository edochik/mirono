import { Filter } from "./modules/Filter/Filter.jsx"
import { Footer } from "./modules/Footer/Footer.jsx"
import { Goods } from "./modules/Goods/Goods.jsx"
import { Header } from "./modules/Header/Header.jsx"
import { Hero } from "./modules/Hero/Hero.jsx"
import { Order } from "./modules/Order/Order.jsx"
import { Subscribe } from "./modules/Subscribe/Subscribe.jsx"

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <Order />
    </>
  )
}

