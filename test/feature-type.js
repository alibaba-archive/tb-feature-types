'use strict'
const FeatureType = require('..')
const tman = require('tman')
const should = require('should')

tman.suite('tb feature types', function () {
  tman.it('Should return all types', function () {
    let allTypes = FeatureType.getAllTypes()
    should(allTypes.length).eql(14)
  })

  tman.it('Should return me types', function () {
    let meTypes = FeatureType.getMeTypes()
    should(meTypes).eql(['app_for_me'])
  })

  tman.it('Should return organization types', function () {
    let orgTypes = FeatureType.getOrganizationTypes()
    should(orgTypes).eql(['app_for_organization'])
  })

  tman.it('Should return orga types', function () {
    let projectTypes = FeatureType.getProjectTypes()
    should(projectTypes.length).eql(12)
  })

  tman.it('Should return invalid type', function () {
    let isValidType = FeatureType.isValidType('invalid type')
    should(isValidType).eql(false)
  })

  tman.it('Should return valid type', function () {
    let isValidType = FeatureType.isValidType('app_for_me')
    should(isValidType).eql(true)
  })
})
