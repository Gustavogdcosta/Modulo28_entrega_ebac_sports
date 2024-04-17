import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type referenciaState = {
  itens: Produto[]
}

const initialState: referenciaState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoFavoritado = action.payload

      if (state.itens.find((produto) => produto.id === produtoFavoritado.id)) {
        alert('item ja foi favoritado')
      } else {
        state.itens.push(produtoFavoritado)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
