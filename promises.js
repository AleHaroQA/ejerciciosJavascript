function fetchData(url) {
    let respuesta = fetch(url);
    if (respuesta.status == 200) {
        return true;
    }else{
        return false;
    }

    // return respuesta;
}

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let response = fetch(url).then(res => res.status);
            if (response == 200) {
                const mockData = {
                id: 1,
                name: "Producto de ejemplo",
                price: 10.99,
                category: "Electrónica"
            };
            resolve(mockData);
            }
        }, 2000);
    });
};

fetchData("https://pokeapi.co/api/v2/pokemon/ditto");


// promiseData.then(function(dataSuccess){
//     //data ok
// }).catch(function(dataError){
//     //data error
// });


