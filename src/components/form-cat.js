import React from 'react'
import { Marker } from '@react-google-maps/api'
import { Map } from './map'
import { Form } from './styles'

const mapStyles = {
  margin: '0 auto',
  height: '30vh',
  width: '100%',
}

function FormCat({
  children,
  formHandler,
  formData,
  inputHandler,
  onClickMap,
}) {
  return (
    <Form onSubmit={formHandler}>
      <fieldset disabled={false} aria-busy={false}>
        <label htmlFor='name'>
          Name
          <input
            type='string'
            id='name'
            name='name'
            placeholder='Name'
            required
            value={formData.name}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='breed'>
          Breed
          <input
            type='string'
            id='breed'
            name='breed'
            placeholder='Breed'
            required
            value={formData.breed}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='age'>
          Age
          <input
            type='number'
            id='age'
            name='age'
            placeholder='Age'
            required
            value={formData.age}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='description'>
          Description
          <textarea
            id='description'
            name='description'
            placeholder='Enter A Description'
            required
            defaultValue={formData.description}
            onChange={inputHandler}
          />
        </label>
        <label htmlFor='description'>
          Location
          <Map mapContainerStyle={mapStyles} onClick={onClickMap}>
            <Marker position={formData.location} />
          </Map>
        </label>
        {children}
      </fieldset>
    </Form>
  )
}

export { FormCat }
