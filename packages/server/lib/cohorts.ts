const cache = require('./cache')
import type { Cohort } from '@packages/types'
const debug = require('debug')('cypress:server:cohorts')

export = {
  get: (name: string) => {
    debug('Get cohort name:', name)

    return cache.getCohorts().then((cohorts) => {
      debug('Get cohort returning:', cohorts[name])

      return cohorts[name]
    })
  },
  set: (cohort: Cohort) => {
    debug('Set cohort', cohort)

    return cache.insertCohort(cohort)
  },
}