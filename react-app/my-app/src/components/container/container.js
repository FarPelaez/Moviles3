import React, { useState, useEffect } from "react";
import Articles from "./articles";
import "./container-styles.css"


export default function Contenedor() {

    //Variable para los post
    const [post, setPost] = useState([]);

    //Función asincrona para obtener los datos
    const getData = async () => {
        let url = 'https://newsapi.org/v2/top-headlines?country=co&apiKey=b622cc8589b34755b7d841c77c733ddf';
        const res = await fetch(url);
        const data = await res.json();
        return setPost(data.articles)
    }

    //Variables paginación
    const [startPost, setStartPost] = useState();
    const [endPost, setEndPost] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const limit = 9;

    //Variables para botones
    const [prevButton, setPrevButton] = useState(true);
    const [nextButton, setNextButton] = useState(false);

    //Realizar consultas
    useEffect(() => {
        getData();

        setStartPost((pageNumber - 1) * limit);
        setEndPost(pageNumber * limit);
        console.log(startPost);
        console.log(endPost);
    }, [pageNumber, startPost, endPost])

    //Función para adelantar páginas
    const Next = () => {
        if (pageNumber === (Math.floor((getData.length + limit - 1) / limit))) {
            setNextButton(true);
        } else {
            setPageNumber(pageNumber + 1);
            setPrevButton(false);
        }
    };

    const Prev = () => {
        if (pageNumber === 1) {
            setPrevButton(true);
        } else {
            setNextButton(false);
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <>
            <div className="w3-row-padding">
                {
                    post.slice(startPost, endPost).map((art, index) => {
                        return <Articles
                            key={index}
                            titulo={art.title}
                            fecha={art.publishedAt}
                            descripcion={art.description}
                            imagen={art.urlToImage}
                        />
                    })
                }
            </div>
            <div className="pagination">
                <button disabled={prevButton} onClick={Prev} className="less" type="button">Cargar menos</button>
                <span className="page-number"> {pageNumber}</span>
                <button disabled={nextButton} onClick={Next} className="more" type="button">Cargar más</button>
            </div>
        </>
    );
}