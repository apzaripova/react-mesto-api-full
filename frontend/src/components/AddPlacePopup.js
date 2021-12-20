import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useRef } from "react";


export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {

      const cardTitle = useRef();
      const cardLink = useRef();
  
      function handleSubmit(e) {
          e.preventDefault();
          onAddPlace({
              link: cardLink.current.value,
              name: cardTitle.current.value,
          });
          cardTitle.current.value = ''
          cardLink.current.value = ''
      }

    return (
        <PopupWithForm  title="Новое место" submitButtonText="Создать" name="newCard" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
                    <input 
                      className="popup__input popup__input_type_title" 
                      id="input-title" 
                      type="text" 
                      placeholder="Название" 
                      name="name" 
                      minLength="2" 
                      maxLength="30" 
                      required 
                      ref={cardTitle}
                    />
                    <span className="popup__input-error input-title-error"></span>
                    <input 
                      className="popup__input popup__input_type_link" 
                      id="input-link" 
                      type="url" 
                      placeholder="Ссылка на картинку" 
                      name="link" 
                      required 
                      ref={cardLink}
                    />
                    <span className="popup__input-error input-link-error"></span>
        </PopupWithForm>
    )
}