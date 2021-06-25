import {
  CheckboxField,
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const UserForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.user?.id)
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
          name="confirmedEmail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Confirmed email
        </Label>
        <CheckboxField
          name="confirmedEmail"
          defaultChecked={props.user?.confirmedEmail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="confirmedEmail" className="rw-field-error" />

        <Label
          name="subscribedToNews"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Subscribed to news
        </Label>
        <CheckboxField
          name="subscribedToNews"
          defaultChecked={props.user?.subscribedToNews}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="subscribedToNews" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default UserForm
