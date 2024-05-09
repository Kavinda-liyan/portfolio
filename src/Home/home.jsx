
import NavBar from "../Components/navbar";
import NewContents from "../Components/contents";
import ScrollToTop from "../Components/ScrollToTop";
import '../css/style.css'
import Footer from "../Components/footer";
function Home(){
    return(
        <div>
 <NavBar/>
 <NewContents/>
 <ScrollToTop/>
 <Footer/>


        </div>
       

    );
}

export default Home;