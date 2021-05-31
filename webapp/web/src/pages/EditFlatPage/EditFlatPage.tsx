import FlatsLayout from 'src/layouts/FlatsLayout'
import EditFlatCell from 'src/components/EditFlatCell'

const EditFlatPage = ({ id }) => {
  return (
    <FlatsLayout>
      <EditFlatCell id={id} />
    </FlatsLayout>
  )
}

export default EditFlatPage
