import React, { useState } from 'react';


const Cards = (props) => {

    const [displayModal, setDisplayModal] = useState(false);

    const hideModal = () => {
        setDisplayModal(!displayModal);
    };

    const hideModalOutside = (event) => {
        const modal = document.getElementById(event.target.id)
        if (modal && modal.contains(event.target)) {
            setDisplayModal(!displayModal);
        }
    }

    return (

            <div className='cards'>
                <div className='cards__body'>
                    <img src={props.photo} alt="Not Found" />
                    <h4>{props.title}</h4>
                    <p>{props.pg}</p>
                    <button onClick={() => setDisplayModal(true)}>{props.buttonText}</button>
                </div>
                {/* ---- MODAL --- */}

                <div className={displayModal ? 'modal' : 'modal-none'} id={props.modalId} onClick={hideModalOutside}> {/* Hide modal */}

                    {/* ---- MODAL CONTENT --- */}

                    <div className="modal-content">
                        <span className="modal-close" onClick={hideModal}>&times;</span>
                        <h4>{props.modalTitle}</h4>
                        <p>{props.modalPg}</p>
                    </div>
                </div>
            </div>
        
    );


};
export default Cards;