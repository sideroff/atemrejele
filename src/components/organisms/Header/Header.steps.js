import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { defineFeature, loadFeature } from 'jest-cucumber'
import TestRenderer from 'react-test-renderer'

import Header from './Header'
import { headerLinks } from 'utils/config'

const featureFileName = 'Header.feature'
const featurePath = require('path').resolve(__dirname, featureFileName)
const feature = loadFeature(featurePath)

defineFeature(feature, test => {
  test('Showing the Header', ({ given, when, then }) => {
    let component;
    given('I have access to the application', () => {
      component = TestRenderer.create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
    })

    then('the Links specified in the config should be in it', () => {
      const aContainer = component.toJSON().children[1]
      expect(aContainer.children.length === headerLinks.length).toBe(true)
    })
  })
})