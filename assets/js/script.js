const car = {
    manufacture: "Toyota",
    year: 2015,
    model: "corolla",
    age: function (){
        return 2023-this.year
    }
}
car.year = 2016

console.log(car['year'])
console.log(car.model)
console.log(car.age())