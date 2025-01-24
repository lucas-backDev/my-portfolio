/**
 *  @copyright 2024 lucas-backDev
 *  @license Apache-2.0
 */


/**
 * Componentes
 */
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"


const App = () => {
    return (
      <> 
        <Header />
        <main>
            <Hero />
            <About />
        </main>
      </>
)
}

export default App;