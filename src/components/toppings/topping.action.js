import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const endPoint = 'Topping'
export const fetchTopping = createAsyncThunk('Topping/fetchTopping', async () => {

    const response = await axios.get('http://localhost:4000/toppings/');

    const Topping = await response.data

    return Topping;

})