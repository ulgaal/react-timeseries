/*
Copyright 2022 Ulrich Gaal

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import PropTypes from 'prop-types'
import { RangeType } from './prop-types'
import { LEVELS, log } from './logs'
import './VAxis.css'

const VAxis = props => {
  log('VAxis', LEVELS.INFO, props)
  const {
    height,
    range
  } = props
  return (
    <g className='rt-vaxis'>
      <line x1={0} y1={0} x2={0} y2={height} />
    </g>
  )
}
VAxis.propTypes = {
  height: PropTypes.number,
  range: RangeType
}

export default VAxis
