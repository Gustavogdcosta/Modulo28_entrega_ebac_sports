import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const itensSelecionados = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const itensFavoritados = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )

  const valorTotal = itensSelecionados.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritados.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensSelecionados.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
