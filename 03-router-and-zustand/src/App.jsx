import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./pages/Home.jsx"
import SearchPage from "./pages/Search.jsx"
import { JobDetail } from "./pages/Detail.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/search" element={ <SearchPage/> } />
        <Route path="/jobs/:jobId" element={ <JobDetail /> } />
        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
