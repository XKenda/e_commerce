import { createSlice } from "@reduxjs/toolkit";



const AllProducts = createSlice({
    name: "Products",
    initialState: {
        products : [],
        total : 0,
        numOfItemsCart: 0
    },
    reducers: {
        setProducts: (state, action)=>{
            state.products = action.payload;
        },
        add: (state, action)=>{
            state.products.map((obj)=>{
                if (obj.id == action.payload){
                    obj.added = true
                    state.numOfItemsCart += obj.quantity
                }
            })
        }, 
        remove: (state, action)=> {
            state.products.map((obj)=>{
                if (obj.id == action.payload){
                    obj.added = false
                    state.numOfItemsCart -= obj.quantity
                    obj.quantity = 1
                }
            })
        },
        incquantity: (state, action)=>{
            state.products.map((obj)=>{
                if (obj.id === action.payload){
                    obj.quantity += 1
                }
            })
        },
        decquantity: (state, action)=>{
            state.products.map((obj)=>{
                if (obj.id === action.payload){
                    obj.quantity -= 1
                }
            })
        },
        setTheTotal: (state, action)=>{
            state.total = action.payload
        },
        setTheNum: (state, action)=>{
            state.numOfItemsCart = action.payload
        }

    }

})

export const {setProducts, add, remove, incquantity, decquantity, setTheTotal, setTheNum} = AllProducts.actions;
export default AllProducts.reducer;