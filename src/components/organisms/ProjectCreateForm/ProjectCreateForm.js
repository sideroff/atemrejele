import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Input, Textarea, Button, FieldGroup, ActionGroup, Label } from 'components/atoms'

import { randomIntByMinMax, projectNamePlaceholders } from 'utils'
import i18n from 'i18n'

const ProjectCreateForm = ({ handleSubmit, onSubmit, className }) => {

  const [randomPlaceholderIndex] = useState(randomIntByMinMax(0, projectNamePlaceholders.length -1))

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        <Label htmlFor='name'>{i18n.t('name')}</Label>
        <Field name='name' component={Input} type='text' placeholder={projectNamePlaceholders[randomPlaceholderIndex] + '...'} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor='description'>{i18n.t('description')}</Label>
        <Field name='description' component={Textarea} type='text' placeholder={i18n.t('description')} />
      </FieldGroup>

      <ActionGroup>
        <Field name='submit' component={Button} $type='primary' type='submit' placeholder={i18n.t('submit')}>
          { i18n.t('submit') }
        </Field>
      </ActionGroup>
    </form>
  )
}

export default reduxForm({
  form: 'projectCreate'
})(ProjectCreateForm)
