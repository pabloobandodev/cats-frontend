import React from 'react'
import { useHistory } from 'react-router-dom'
import { useCat, CREATE_CAT } from '../context'
import { useRandomId, useVisible } from '../hooks'
import { Card, Button } from '../components/styles'
import { FormCat, Modal, Emoji } from '../components'

function CreateCat() {
  const [formData, setFormData] = React.useState({
    name: '',
    breed: '',
    age: 0,
    description: '',
    location: {
      lat: 0,
      lng: 0,
    },
  })
  const history = useHistory()
  const id = useRandomId()
  const [, dispatch] = useCat()
  const [visible, toggleVisible] = useVisible(false)

  const inputHandler = (e) => {
    const { type, name, value } = e.target
    const val = type === 'number' ? parseFloat(value) : value
    setFormData({ ...formData, [name]: val })
  }

  const formHandler = (e) => {
    e.preventDefault()
    if (formData.location.lat === 0) {
      toggleVisible()
      return
    }
    dispatch({ type: CREATE_CAT, value: { ...formData, id } })
    history.push(`/cats`)
    return
  }

  const onClickMap = (e) => {
    const location = {
      lat: e?.latLng.lat(),
      lng: e?.latLng.lng(),
    }
    setFormData({ ...formData, location })
  }

  return (
    <React.Fragment>
      <Card>
        <h1>Create Cat</h1>
        <FormCat
          formHandler={formHandler}
          formData={formData}
          inputHandler={inputHandler}
          onClickMap={onClickMap}
        >
          <Button
            type='submit'
            style={{ width: '100%', backgroundColor: '#2e4b84' }}
          >
            SUBMIT
          </Button>
        </FormCat>
      </Card>
      <Modal visible={visible} hide={toggleVisible}>
        <h3>
          Add a cat location
          <Emoji emoji={'🗺️'} label='Cat Smiling' />
        </h3>
        <p>You must select a location at the map</p>
      </Modal>
    </React.Fragment>
  )
}

export default CreateCat
