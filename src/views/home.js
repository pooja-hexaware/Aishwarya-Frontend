import React ,{useState} from 'react'
import Footer from '../components/common/footer/footer'
import Header from '../components/common/header/header'
import CenteredTabs from '../components/common/tabOptions/centralTabs'
import CouponValidation from '../components/couponValidation/couponValidation'
import MainPage from '../components/mainPage/mainPage'
import Menu from '../components/menu/menu'
import Restaurants from '../components/restaurants/restaurants'

const Home=()=>{
    const [activeTab, setActiveTab]=useState("NearBy Restaurants")
    
    return(
        <div>
            <Header/>
            <CenteredTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
            {getCorrectScreen(activeTab)}
            <Footer/>
        </div>
    )
};
const getCorrectScreen = (tab) => {
    switch(tab){
        case "MainPage":
            return <MainPage/>
        
        case "NearBy Restaurants":
            return <Restaurants/>

        case "Menu Listings":
            return <Menu/>

        case "Coupons":
            return <CouponValidation/>
        
        default:
            return <MainPage/>
    }
}
export default Home