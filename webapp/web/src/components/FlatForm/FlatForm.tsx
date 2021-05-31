import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const FlatForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.flat?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="zipCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Zip code
        </Label>
        <TextField
          name="zipCode"
          defaultValue={props.flat?.zipCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="zipCode" className="rw-field-error" />

        <Label
          name="squareMeters"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Square meters
        </Label>
        <NumberField
          name="squareMeters"
          defaultValue={props.flat?.squareMeters}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="squareMeters" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FlatForm
