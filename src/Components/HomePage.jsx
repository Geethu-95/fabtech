import NavLogoSearch from './NavLogoSearch'
import Footer from './Footer'
import NavMenu from './NavMenu'
import SwipeableTextMobileStepper from './Jumbotron'
import Carousel from './Carousel'
import SuccessStories from './SuccessStories'
import ProductsHome from './ProductsHome'


export default function HomePage() {

    return(

        <>
        {/* <NavLogoSearch/>
        <NavMenu/> */}
        <Carousel />
         <ProductsHome/>
         <SuccessStories/>
            {/* <Footer/> */}
        </>
    );
}