import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5],
    //         loading: false
    //     })
    // }, 3000);

    useEffect(() => {
      getGifs( category )
        .then( imgs => {      

          setState({
          data: imgs,
          loading: false,
        });    

        })
    }, [category])
    

    return state;
}