import { useState,useEffect } from "react"
// import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    
    const {images, isLoading } = useFetchGifs(category)

    console.log({isLoading})

    // const [counter, setCounter] = useState(10)
    // const [images, setImages] = useState([]);
    
    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     //console.log(newImages)
    //     setImages(newImages)
    // }

    // useEffect( () => {
    //     getImages();

    // },[])


    // const gifs = [1,2,3,4,5,6]
    return (
    <>
        <h3>{ category}</h3>

        {   
            isLoading && ( <h2>Cargando...</h2>) 
            // isLoading 
            // ? ( <h2>Cargando...</h2>)
            // : null
        }
       

        <div className="card-grid">
            {
                images.map( (image ) =>(
                    <GifItem key={image.id} 
                    {...image}
                    />
                ))
            }  
        </div>

        {/* <h5>{counter}</h5>       <button onClick={()=> setCounter( counter + 1) }> +1</button> */}

        {/* {
            gifs.map( gif =>(
                <p>{gif}</p>
            ))
        } */}
    </>
  )
}
