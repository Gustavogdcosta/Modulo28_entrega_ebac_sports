import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type referenciaState = {
  itens: Produto[]
}

const initialState: referenciaState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoEscolhido = action.payload

      if (state.itens.find((produto) => produto.id === produtoEscolhido.id)) {
        alert('Produto já adicionado ao carrinho')
      } else {
        state.itens.push(produtoEscolhido)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
