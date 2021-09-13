import { Empty, Failure, Loading, Success } from './FlatsCardsCell'
import { oneCard, standard } from './FlatsCardsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : null
}

export const empty = () => {
  return Empty ? <Empty /> : null
}

export const failure = () => {
  return Failure ? <Failure error={new Error('Oh no')} /> : null
}

export const success1 = () => {
  return Success ? <Success {...oneCard()} /> : null
}

export const successMultiple = () => {
  return Success ? <Success {...standard()} /> : null
}

export default { title: 'Cells/FlatsCardsCell' }
