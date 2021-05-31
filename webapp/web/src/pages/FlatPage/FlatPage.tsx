import FlatsLayout from 'src/layouts/FlatsLayout'
import FlatCell from 'src/components/FlatCell'

const FlatPage = ({ id }) => {
  return (
    <FlatsLayout>
      <FlatCell id={id} />
    </FlatsLayout>
  )
}

export default FlatPage
