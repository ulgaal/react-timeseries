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
let context = null
/**
 * Measure the width of a styled piece of text using a 2D Canvas
 * @param {object} params parameters specifying the text to measure
 * | Key        | Type             | Description                                                                        |
 * |------------|------------------|--------------------------|
 * | text       | `<string>`       | Text |
 * | fontWeight | `<string>`       | CSS font-weight |
 * | fontSize   | `<string>`       | CSS font-size (including unit) |
 * | fontFamily | `<string>`       | CSS font-familty|
 * @returns the width in pixel
 */
export const meaureText = params => {
  const { text, fontWeight, fontSize, fontFamily } = params
  if (!context) {
    const canvas = document.createElement('canvas')
    context = canvas.getContext('2d')
  }
  const font = `${fontWeight} ${fontSize} ${fontFamily}`
  if (context.font !== font) {
    context.font = font
  }
  const { width } = context.measureText(text)
  return width
}
