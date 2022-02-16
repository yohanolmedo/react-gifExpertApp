import React, { useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  
    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([])

    //const state = useFetchGifs();
    const { data:images, loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs( category )
    //         .then(setImages);
    // }, [ category ]);

    

    return (
      <>
        <h3 className="animate__animated animate__fadeIn"> { category } </h3>
        {/* { loading ? "Cargando..." : "Fin de Carga"} */}

        {loading && <p>Loading...</p>}

        <div className="card-grid">          
            {images.map((img) => (
              // <li key={ img.id }>{ img.title }</li>
              <GifGridItem
                key={img.id}
                // {img={ img }}
                {...img}
              />
            ))}
        </div>
      </>
    );
}

export default GifGrid;
