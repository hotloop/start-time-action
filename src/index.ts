import { exportVariable } from '@actions/core'
import { now } from './now'

exportVariable('HOTLOOP_START_TIME', now())
