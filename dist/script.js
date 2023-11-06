async function exchangeRate(kripto) {
    let url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR';
    let coinPrice = '';
    const response = await axios.get(url);

    try {
        const data = response.data.coins;

        for (let i = 0; i < data.length; i++) {
            if (data[i].symbol.toLowerCase() == kripto) {
                coinPrice = data[i].price;
                break;
            }
        }
    } catch (error) {
        console.log(error);
    }

    return coinPrice;
}

async function convertCurrency() {
    try {
        console.log('click');
        const amount = document.getElementById("amount").value;
        const currency = document.getElementById("currency").value.toLowerCase();

        const result = await exchangeRate(currency) * amount * 1.955 * 0.955;



        document.getElementById("result").value = result.toFixed(2);
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("convert").addEventListener("click", convertCurrency);
