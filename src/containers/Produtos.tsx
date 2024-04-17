import { UseSelector, useSelector } from 'react-redux'
import { RootReducer } from '../store'

import { Produto as ProdutoType } from '../App'

import { useGetProdutosQuery } from '../services/api'
import * as S from './styles'
import Produto from '../components/Produto'


const ProdutosComponent = () => {
    const { data: produtos, isLoading } = useGetProdutosQuery()

  if ( isLoading ) {return <h2>Carregando...</h2>}

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
