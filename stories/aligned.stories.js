/*
Copyright 2021 Ulrich Gaal

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
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { addReadme } from 'storybook-readme'

import { ChartContainer, ChartRow, VAxis } from '../src'

import AlignedReadme from './md/aligned/aligned.md'
import docgen from './docgen'
import { generateMarkdown } from './generateMarkdown'
import { series } from './data'
import './aligned.stories.css'

const ChartContainerReadme = generateMarkdown(
  'ChartContainer',
  docgen['src/ChartContainer.js'][0]
)

storiesOf('Aligned', module)
  .addDecorator(addReadme)
  .addParameters({ options: { theme: {} } })
  .addDecorator(withKnobs)
  .add(
    'ChartContainer',
    () => {
      const { series1, series2, series3, series4 } = series
      return (
        <ChartContainer>
          <ChartRow>
            <VAxis
              height={200}
              range={{ min: 0, max: 5000 }}
            />
          </ChartRow>
        </ChartContainer>
      )
    },
    {
      readme: {
        content: AlignedReadme,
        sidebar: ChartContainerReadme
      },
      decorators: []
    }
  )
