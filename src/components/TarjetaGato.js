import "../App.scss"

const TarjetaGato = ({titulo, parrafo, imagen}) => {
    return(
        <div className="tarjeta">
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
            <img src={imagen}/>
        </div>

    )
}

export default TarjetaGato


// Crear el componente TarjetaGato que reciba como props: un nombre, una descripcion y una imagen. TarjetaGato debe tener un titulo con el nombre, un parrafo con la descripcion y la imagen.