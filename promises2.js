async function fetchData(url) {
    let respuesta = await fetch(url);
    // if (respuesta.status == 200) {
    //     return true;
    // }else{
    //     return false;
    // }

    return respuesta;
}

let promesa = new Promise((resolve, reject) => {
    setTimeout(async ()  => {
        let data = await fetchData("https://pokeapi.co/api/v2/pokemon/ditto");
        if (data.status == 200) {
            data.json().then((item) => {
                const mockData = {
                    id: item.id,
                    name: item.name
                }
                return resolve(mockData);
            });
        } else {
            const mockError = {
                
            }
            reject("Error");
        }
    }, 2000);
});

promesa.then(res => console.log(res))
    .catch(rej => console.log(rej));

