const carMakers: string[] = ['ford', 'toyota', 'chevy']
const dates: Date[] = [new Date(), new Date()]

const carByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]


// help with inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// prevent incompatible values
// carMakers.push(100) // throws type error

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase() // syntax highlighting is limited to string methods, cool!
})

// flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2030-11-11')
importantDates.push(new Date())

