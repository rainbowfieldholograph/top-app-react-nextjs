import { SortEnum } from '../../components/sort/Sort.props'
import { ProductModel } from '../../interfaces/product.interface'

export type SortActions =
  | { type: SortEnum }
  | { type: SortEnum.Rating }
  | { type: 'refresh'; initialState: ProductModel[] }

export interface SortReducerState {
  sortMethod: SortEnum
  products: ProductModel[]
}

export const sortReducer = (
  state: SortReducerState,
  action: SortActions
): SortReducerState => {
  switch (action.type) {
    case SortEnum.Rating:
      console.log('rating sort')
      return {
        sortMethod: SortEnum.Rating,
        products: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
      }
    case SortEnum.Price:
      console.log('price sort')
      return {
        sortMethod: SortEnum.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      }
    case 'refresh':
      console.log('refresh')
      return {
        sortMethod: SortEnum.Rating,
        products: action.initialState,
      }
    default:
      throw new Error('Неверный тип сортировки')
  }
}
