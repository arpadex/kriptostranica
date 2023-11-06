const axios = require('axios');
async function exchangeRate(kripto) {
    let url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=50&currency=EUR'
    let coinPrice = '';
    await axios.get(url)
        .then(response => {
            let data = response.data.coins;

            for (let i = 0; i < data.length; i++) {

                if (data[i].symbol.toLowerCase() == kripto) {
                    coinPrice = data[i].price;
                }


            }


        })
        .catch(error => {
            console.log(error);
        });
    return coinPrice;


}

