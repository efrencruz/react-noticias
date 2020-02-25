import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {
    const [categoria, guardarCategoria] = useState('');
    const [noticias, guardarNoticias] = useState([]);

    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=29dccd7e747f41c9bf1043f44fadaa06`;

    useEffect(() => {
        const consultarAPI = async () => {
            const respuesta = await fetch(url);
            const noticias = await respuesta.json();
            guardarNoticias(noticias.articles);
        };

        consultarAPI();
    }, [categoria, url]);

    return (
        <Fragment>
            <Header titulo="Buscador de noticias"></Header>
            <div className="container white">
                <Formulario guardarCategoria={guardarCategoria}></Formulario>
                <ListadoNoticias noticias={noticias}></ListadoNoticias>
            </div>
        </Fragment>
    );
}

export default App;
