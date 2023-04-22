//assignment operators
let num1 = 10;
let num2 = 20;
let num3 = 30;

// num3 = num3 + num1;
num3 += num1;
console.log(num3);


///functions

function fun1(name) {
    console.log("Hello " + name);
}
fun1('Nuwan');

function celsiusToFahrenheit(val){
    let out = val*9;
    out /=5;
    out += 32;
    // console.log(out);
    return out
    console.log('ddd')
}

function convertAndOutput(){
    let out = document.querySelector('#out')
    // console.log(celsiusToFahrenheit(temp.innerHTML));
    out.innerHTML = celsiusToFahrenheit(temp.innerHTML)
}

const convertBtn = document.querySelector('#convert')
const temp = document.querySelector('#temp')

convertBtn.addEventListener('click',convertAndOutput)

const input =document.querySelector('#temp-input')

input.addEventListener('keyup', function () {
    let out = celsiusToFahrenheit(this.value)
    document.getElementById('in-out').innerHTML =out
})

input.addEventListener('change', function (){
    let out = celsiusToFahrenheit(this.value)
    window.alert(this.value+' in fahrenheit is '+out )
})

