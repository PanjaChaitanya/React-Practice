import { BrowserRouter,Routes,Route } from "react-router-dom"

const Home = () => {
  return (
    <div className="p-2">
        <header className="d-flex p-3 border border-2 border-secondary justify-content-between">
            <div className="fs-4 fw-bold">E - Commerce</div>
            <nav className="d-flex align-items-center">
                <span>Home</span>
                <span className="mx-2">Men's</span>
                <span>Women's</span>
                <span className="mx-2">Kid's</span>
            </nav>
            <div>
                <span className="bib bi-heart"></span>
                <span className="bi bi-person-fill mx-3"></span>
                <span className="bi bi-cart4"></span>
            </div>
        </header>
        {/* section outlet */}
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="home" Component={<div></div>}/>
                </Routes>
            </BrowserRouter>
        </section>
    </div>
  )
}

export default Home