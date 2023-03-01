var obj;
var output = '';
var output1;
var output2;
var select1 = document.getElementById("c1");
var select2 = document.getElementById("c2");
var inputCurrency = document.getElementById("inputCurrency");
var outputCurrency = document.getElementById("outputCurrency");
var displayInput = document.querySelector(".displayInput");
var displayOutput = document.querySelector(".displayOutput");
var symbol;

//<-------------------------------------------------------------->

function getCurrency() {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(res => res.json())
        .then(data => {
            return obj = data.symbols;
        })
        .then(() => {

            // console.log(obj);
            // console.log(Object.keys(obj));
            // console.log(Object.values(obj));
            let output = `<option value="null">Currencies</option>`;
            // loop for grabbing each currency name and displaying it in drop down
            for (const [key, value] of Object.entries(obj)) {
                output += `<option value="${key}">${value}</option>`
                // console.log(`${key}: ${value}`);
              };
            document.getElementById('c1').innerHTML = output;
            document.getElementById('c2').innerHTML = output;
        })
        .catch(error => console.log('error', error));
    
}

//<-------------------------------------------------------------->

//on change get symbol(value) of currency selected
function getOption(){
    select1 = document.getElementById("c1"); 
    let output1 = select1.value;
    console.log(output1);
    amount1 = document.querySelector(".inputNum");
    inputNum = parseInt(amount1.value);

    select2 = document.getElementById("c2"); 
    let output2 = select2.value;
    console.log(output2);

    var myHeaders = new Headers();
    myHeaders.append("apikey", "0D7KYS4a1T01b6u32SYYyktfF8OY0Nly");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };

        //conversion of user's value

        fetch("https://api.apilayer.com/fixer/convert?to="
        + output1
        + "&from="
        + output2
        + "&amount="
        + inputNum, requestOptions)
        .then(response => response.json())
        .then(result => {
            return obj = result.result;
        })
        .then(() => {
            console.log(obj);
            let o = obj.toFixed(2);
            document.querySelector('.outputNum').placeholder = o;

        })
        .catch(error => console.log('error', error));

        // 1-to-1 conversion

        fetch("https://api.apilayer.com/fixer/convert?to="
        + output1
        + "&from="
        + output2
        + "&amount="
        + 1, requestOptions)
        .then(response => response.json())
        .then(result => {
            return obj = result.result;
        })
        .then(() => {
            console.log(obj);
            let i = obj.toFixed(2);
            document.querySelector('.displayOutput').innerHTML = i;

        })
        .catch(error => console.log('error', error));

        //grab symbol change display
        fetch("https://api.apilayer.com/fixer/symbols", requestOptions)
        .then(res => res.json())
        .then(data => {
            return obj = data.symbols;
        })
        .then(() => {
            select1 = document.getElementById("c1"); 
            let symbol = select1.value;
            let display = obj.symbol;
            console.log(display);
            document.getElementById("inputCurrency") = display;
            select2 = document.getElementById("c2"); 
            let symbol2 = select2.value;
            let display2 = obj.symbol;
            console.log(display2);
            document.getElementById("outputCurrency") = display2;
        })
        .catch(error => console.log('error', error));
    }

//Run conversion on "enter"
document.querySelector(".inputNum").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        getOption();
    }
});    

//<-------------------------------------------------------------->

//set defaults
