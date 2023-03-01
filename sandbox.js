// DOM Objects
// const fromCurrency = document.querySelector('.currency-1');
// const toCurrency = document.querySelector('.currency-2');
// document.getElementById('getSymbols').addEventListener('click', getCurrency);


// function getCurrency() {
//     fetch('https://api.exchangerate.host/symbols')
//         .then((res) => res.json())
//         .then((data) => {
//             // console.log(data);
//             let output = '<h2>Symbols</h2>';
//             data.forEach(function (symbols) {
//                 output += `
//                 <ul>
//                 <li>Description: ${symbols.description}</li>
//                 <li> Code: ${symbols.code}</li>
//                 </ul>
//                 `;
//             });
//             console.log('output');
//         })
//         .catch((err) => console.log(err))
// }

// fetch('https://api.exchangerate.host/symbols')
//     .then((res) => {
//         return res.json();
//     })
//     .then((myJson) => {
//         console.log(myJson);
//     });

// function getCurrency() {
//     fetch('https://api.exchangerate.host/symbols')
//         .then((res) => res.json())
//         .then((data) => {
//             // console.log(data.symbols);
//             let output = `<h2>Symbols</h2>`;
//             data.symbols.forEach(symbols => {
//                 output += `
//                 <ul>
//                 <li>${symbol.description}</li>
//                 </ul>
//                 `
//             });
//             document.getElementById('output').innerHTML = output;
//             // let output = '<h2>Symbols</h2>';
//             // for (let i = 0; i < data.length; i++) {
//             //     console.log(data[i]);
//             // }
//         })
//         .catch((err) => console.log(err))
// }

// function getCurrency() {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders
//     };

//     fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
//         .then(res => res.json())
//         .then(data => console.log(data.symbols))
//         .catch(error => console.log('error', error));
// }

var obj;
var output = '';

function getCurrency() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    // var obj;

    fetchSymbols("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(res => res.json())
        .then(data => {
            return obj = data.symbols;
        })
        .then(() => {
            // console.log(obj);
            // console.log(Object.keys(obj));
            // console.log(Object.values(obj));
            let output = `<option>Currencies</option>`;
            // loop for grabbing each currency name and displaying it in drop down
            Object.values(obj).forEach(val => {
                output += `
                <option>${val}</option>
                `
            });
            document.getElementById('c').innerHTML = output;
        })
        .catch(error => console.log('error', error));
}

// use an onchange event

function convertCurrency() {
    var selectedElement = document.getElementById("c");
    var value = selectedElement.value;

    function getKeyByValue(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
        console.log(key)
    }

    //   console.log(getKeyByValue(obj, value));
}

document.querySelector(".inputNum").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        convertCurrency();
    }
});


// function convertCurrency() {
//     var myHeaders = new Headers();
//     myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow',
//         headers: myHeaders
//     };

//     var currency1
//     var currency2
//     var amount
//     var currency1value = document.querySelector(".currency1value")
//     var currency2value = document.querySelector(".currency2value")

//     fetchConvert("https://api.apilayer.com/fixer/convert?to="
//         + currency1
//         + "&from="
//         + currency2
//         + "&amount="
//         + amount, requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
// }

