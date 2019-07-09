import { sortIndicesByValues } from './sort-indices'

it('should sort indices by values', () => {
  const colors  = ['blue', 'yellow', 'red', 'black']
  const clothes = ['shoes', 'pants', 'boots', 'coat']

  const sortedIndices = sortIndicesByValues(colors)
  const sortedColors  = sortedIndices.map(i => colors[i])
  const sortedClothes = sortedIndices.map(i => clothes[i])

  expect(sortedColors).toEqual(['black', 'blue', 'red', 'yellow'])
  expect(sortedClothes).toEqual(['coat', 'shoes', 'boots', 'pants'])
})
