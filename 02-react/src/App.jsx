import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/Home.jsx"
import SearchPage from "./pages/Search.jsx"
import { Route } from "./components/Route.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Footer />
    </>
  )
}

export default App
