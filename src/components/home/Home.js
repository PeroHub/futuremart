import Header from "./Header"
import Main from "./Main";
import Footer from "./Footer"
import { futureProducts } from "../../products.js"

function Home() {

    let me = futureProducts()
    console.log(me)
    return ( 
        <div style={{overflowX: "hidden"}}>
            <Header />
            <Main />
            <Footer />
            
        </div>
     );
}

export default Home;