import { Item } from "./Item"


export const ItemList = ({items}) => {

    /**SOLO SE ENCARGA DE RECIBIR LOS DATOS DE ITEMLISTCONTAINER Y MAPEARLOS**/
    return (
        <>
            {
                items.map((elemento,id) => (
                    <Item item = {elemento} key={id} />
                ))
            }
        </>
    )
}