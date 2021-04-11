
import React from 'react';
import Cards from './Cards';
import Photo from '../../../assets/PortafolioExample.png'

const Portfolio = () => {

    return (

        <>
            <div className="portfolio" id="portfolio">
                <h1>Portafolio</h1>
            </div>

            <div className='portfolio__cards'>
                <Cards
                    photo={Photo}
                    title="Titulo 1"
                    pg="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    modalId='myModal1'
                    modalTitle='Titulo Modal 1'
                    modalPg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                    veritatis, saepe rerum rem veniam, sint ullam debitis maiores quasi quas
                     reprehenderit inventore ad laudantium perspiciatis cum doloremque aperiam magnam! 
                     Eligendi.'

                />

                <Cards
                    photo={Photo}
                    title="Titulo 2"
                    pg="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    modalId='myModal2'
                    modalTitle='Titulo Modal 2'
                    modalPg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                    veritatis, saepe rerum rem veniam, sint ullam debitis maiores quasi quas
                     reprehenderit inventore ad laudantium perspiciatis cum doloremque aperiam magnam! 
                     Eligendi.'
                />

                <Cards
                    photo={Photo}
                    title="Titulo 3"
                    pg="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    modalId='myModal3'
                    modalTitle='Titulo Modal 3'
                    modalPg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                    veritatis, saepe rerum rem veniam, sint ullam debitis maiores quasi quas
                    reprehenderit inventore ad laudantium perspiciatis cum doloremque aperiam magnam! 
                    Eligendi.'
                />

                <Cards
                    photo={Photo}
                    title="Titulo 4"
                    pg="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                    buttonText="Visitar"
                    modalId='myModal4'
                    modalTitle='Titulo Modal 4'
                    modalPg='Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, 
                    veritatis, saepe rerum rem veniam, sint ullam debitis maiores quasi quas 
                    reprehenderit inventore ad laudantium perspiciatis cum doloremque aperiam magnam! 
                    Eligendi.'
                />
            </div>
        </>
    )
};

export default Portfolio

