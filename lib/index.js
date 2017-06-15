'use strict'
/**
 * 应用类型类， 定义了应用支持的所有能力类型
 * @author: 李强
*/

class FeatureType {
  constructor () {
    this.name = 'feature types'
  }

  // [ type1, type2 ]
  static getAllTypes () {
    return [].concat(
      FeatureType.getMeTypes(),
      FeatureType.getOrganizationTypes(),
      FeatureType.getProjectTypes())
  }

  // { TYPE1: type1, TYPE2: type2 }
  static getAllTypesObject () {
    let types = FeatureType.getAllTypes()
    let object = {}
    types.forEach(function (ele) {
      object[ele.toUpperCase()] = ele
    })
    return object
  }

  // 获取我的类型
  static getMeTypes () {
    return ['app_for_me']
  }

  // 获取企业类型
  static getOrganizationTypes () {
    return ['app_for_organization']
  }

  // 获取项目相关的能力类型列表
  static getProjectTypes () {
    return [
      'app_for_project',
      'plugin_for_project',
      'plugin_for_tasklist',
      'plugin_for_collection',
      'plugin_for_stage',
      'plugin_for_task',
      'plugin_for_post',
      'plugin_for_work',
      'plugin_for_event',
      'plugin_for_bookkeeping',
      'plugin_for_entry',
      'plugin_for_relate'
    ]
  }

  // 获取移动端支持的能力类型列表
  static getMobileTypes () {
    return [
      'app_for_organization',
      'app_for_project',
      'plugin_for_task',
      'plugin_for_post',
      'plugin_for_work',
      'plugin_for_event'
    ]
  }

  // 是否为合法的能力类型
  static isValidType (type) {
    return !!~FeatureType.getAllTypes().indexOf(type)
  }
}

module.exports = FeatureType
