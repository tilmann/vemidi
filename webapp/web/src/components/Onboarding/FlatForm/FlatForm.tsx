import {
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { useForm } from 'react-hook-form'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const FlatForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.flat?.id)
  }

  const { register } = useForm()

  return (
    <div>
      <Form className="mt-8 space-y-6" onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <div className="">
          <Label
            name="zipCode"
            className="text-sm font-medium text-gray-700"
            errorClassName="rw-label rw-label-error"
          >
            Postleitzahl
          </Label>
          <TextField
            name="zipCode"
            defaultValue={props.flat?.zipCode}
            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="zipCode" className="rw-field-error" />
        </div>
        <div>
          <Label
            name="squareMeters"
            className="block text-sm font-medium text-gray-700"
            errorClassName="rw-label rw-label-error"
          >
            Wohnfläche in Quadratmeter
          </Label>
          <NumberField
            name="squareMeters"
            defaultValue={props.flat?.squareMeters}
            className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
          <FieldError name="squareMeters" className="rw-field-error" />
        </div>
        <div className="">
          <Submit
            disabled={props.loading}
            className="mt-8 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Wohnung anlegen
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FlatForm
