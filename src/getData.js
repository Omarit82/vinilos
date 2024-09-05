export async function getDiscos(){
    /*Estado para almacenar los productos.*/
    try {
        const respuesta =  await fetch('https://66804c6456c2c76b495bb799.mockapi.io/discos/');
        if(!respuesta.ok){
            throw new Error ('Error en la solicitud '+ respuesta.status);
        }
        const datos = await respuesta.json();
        return datos; 
    } catch (error) {
        throw new Error ('Error en la solicitud '+ error);
    }
}

export async function getDiscoPorId(discoId){
    try {
        const respuesta =  await fetch('https://66804c6456c2c76b495bb799.mockapi.io/discos/');
        const datos = await respuesta.json();
        const disco = await datos.find(item => item.id == discoId);
    
        return disco; 
    } catch (error) {
        throw new Error ('Error '+error );
    }
}

export async function getDiscosByCategory (category){
    try {
        const cat = category.toLowerCase();
        const respuesta =  await fetch('https://66804c6456c2c76b495bb799.mockapi.io/discos/');
        const datos = await respuesta.json();
        const discos = await datos.filter(item =>item[cat] == true);
        return discos; 
    } catch (error) {
        throw new Error ('Error '+error );
    }
}