import Kids from "./Kids"
import WildCardRoute from "./WildCardRoute"
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
const Home = () => {
  return (
    <div className="p-2">
        <BrowserRouter>
        <header className="d-flex p-3 border border-2 border-secondary justify-content-between">
            <div className="fs-4 fw-bold">E - Commerce</div>
            <nav className="d-flex align-items-center btn-group bg-info">
                <Link to='home'><button className="btn btn-info">Home</button></Link>
                <Link to='mens'><button className="btn btn-info">Men's</button></Link>
                <Link to='womens'><button className="btn btn-info">Women's</button></Link>
                <Link to='kids'><button className="btn btn-info">Kid's</button></Link>            
            </nav>
            <div>
                <span className="bib bi-heart"></span>
                <span className="bi bi-person-fill mx-3"></span>
                <span className="bi bi-cart4"></span>
            </div>
        </header>
        
        {/* section outlet */}
        <section>
            <Routes>
                <Route path="/" element={
                    <div className="justify-content-center">
                        <h2>All Products </h2>
                        <p>50% off on home fasion</p>
                        <button className="btn btn-success">Shop Now</button>
                    </div>}/>
                <Route path="home" element={<div>
                    <h2>All Products </h2>
                    <p>50% off on home fasion</p>
                    <button className="btn btn-success">Shop Now</button>
                </div>}/>
                <Route path="kids" element={<div><Kids/></div>}/>
                <Route path="*" element={<WildCardRoute/>}/>
            </Routes>
        </section>
        </BrowserRouter>
    </div>
  )
}

export default Home