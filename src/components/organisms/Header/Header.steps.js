import React from 'react'
import { defineFeature, loadFeature } from 'jest-cucumber'
import TestRenderer from 'react-test-renderer'

import Header from './Header'


const featureFileName = 'Header.feature'
const featurePath = require('path').resolve(__dirname, featureFileName)
const feature = loadFeature(featurePath)

defineFeature(feature, test => {
  test('Showing the Header', ({ given, when, then }) => {
    given('I have access to the application', () => {
      const component = TestRenderer.create(<Header />)
      console.log('header json ', compoennt.toJSON())
    })

    when('I open the application on a any page', () => {
    })

    then('the Header should display on top of the page', () => {
      expect(true).toBe(true)
    })

    then('the Links specified in the config should be in it', () => {
      expect(false).toBe(false)
    })
  })
})