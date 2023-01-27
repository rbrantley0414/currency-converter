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

function getCurrency() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    var obj;

    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(res => res.json())
        .then(data => {
            obj = data.symbols;
        })
        .then(() => {
            // console.log(obj);
            // for(i = 0; i < Object.values(obj).length)
            let output = `<option>Currencies</option>`;
            Object.values(obj).forEach(val => {
                output += `
                <option>${val}</option>
                `
            });
            document.getElementById('c').innerHTML = output;
        })
        .catch(error => console.log('error', error));
}


// //loop for grabbing each country name and displaying it in drop down

// document.get

// //use an onchange event
