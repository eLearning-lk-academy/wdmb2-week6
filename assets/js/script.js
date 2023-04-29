const cars = ['Toyota', 'BMW', 'Benz']

console.log(cars)
console.log(cars[2])

cars[1] = 'Tesla'
console.log(cars)


cars[4] = 'Ford'
console.log(cars)
console.log(cars[3])

document.getElementById('out').innerHTML = cars

console.log(cars.toString())

document.getElementById('out2').innerHTML = cars.join(' ')

const cars2 = ['Honda', 'Nisan']

const allCars = cars.concat(cars2)
console.log(allCars)
console.log(allCars.pop())
console.log(allCars)
console.log(allCars.push('Mini'))
console.log(allCars)
allCars.shift()
console.log(allCars)
allCars.unshift('Volovo')
console.log(allCars)
console.log(allCars.length)


