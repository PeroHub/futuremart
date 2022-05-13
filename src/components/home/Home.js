import Header from "./Header"
import Main from "./Main";
import Footer from "./Footer"
import { futureProducts } from "../../products.js"

function Home() {

    let me = futureProducts()
    console.log(me)
    return ( 
        <div>
            <Header />
            <Main />
            <Footer />
            
        </div>
     );
}

export default Home;