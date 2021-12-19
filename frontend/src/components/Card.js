import React from 'react'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({card, onCardClick, onCardDelete, onCardLike, }) {

    const currentUser = React.useContext(CurrentUserContext);

     //Определяем, являемся ли мы владельцем карточки
    const isOwn = card.owner === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((id) => id === currentUser._id);
     
    function handleClick() {
        onCardClick(card);
      }

    function handleCardLike() {
        onCardLike(card)
      }

      function handleDeleteCard() {
        onCardDelete(card)
      }

    return (
        <li className="card">
            <div className="card__container">
                            <img className="card__photo" alt={card.name} src={card.link} onClick={handleClick} />
            </div>
                        <div className="card__info">
                            <h2 className="card__title">{card.name}</h2>
                            <div className="card__container-like">
                                <button 
                                  className={`card__button-like ${
                                    isLiked ? 'card__button-like_active' : ''
                                  }`}
                                  type="button" 
                                  aria-label="Лайк" 
                                  onClick={handleCardLike}
                                ></button>
                                <span className="card__count-like">{card.likes.length}</span>
                            </div>
                        </div>
                        {isOwn ? (
        <button
          className="card__button-delete"
          type="button"
          aria-label="Удалить карточку"
          onClick={handleDeleteCard}
        ></button>
      ) : (
        ''
      )}
        </li>
    )
}