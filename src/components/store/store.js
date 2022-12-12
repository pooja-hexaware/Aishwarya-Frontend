import { configureStore } from '@reduxjs/toolkit'
import RestaurantReducer from '../restaurants/restaurantSlice'
import MenuReducer from '../menu/menuSlice'
import ToppingReducer from '../toppings/toppingSlice'
import cartReducer from './cart.slice'

const store =  configureStore({
    reducer: {
        Restaurant: RestaurantReducer,
        Menu: MenuReducer,
        Topping:ToppingReducer,
        Cart: cartReducer,
    },
})

export default store;