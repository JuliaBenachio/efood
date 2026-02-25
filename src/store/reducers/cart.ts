import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  step: 'cart' | 'address' | 'payment' | 'confirmation'
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  step: 'cart'
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const prato = state.items.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.items.push(action.payload)
      } else {
        alert('O prato já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    setStep: (
      state,
      action: PayloadAction<'cart' | 'address' | 'payment' | 'confirmation'>
    ) => {
      state.step = action.payload
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, setStep, clear } = cartSlice.actions
export default cartSlice.reducer
