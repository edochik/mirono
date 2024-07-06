import { useDispatch } from "react-redux"
import './card.scss'
import classNames from "classnames"
import { addItemToCart } from "../../redux/cartSlice.js";
import { useState } from "react";

export const Card = ({ className, id, img, title, dateDelivery, price }) => {
	const [text, setText] = useState(`${price} ₽`);
	const dispatch = useDispatch();
	const onClickAddToCart = () => {
		dispatch(addItemToCart({ id, img, title, dateDelivery, price }))
	};
	return (
		<article className={classNames(className, 'card')}>
			<img
				className="card__image"
				src={img}
				alt={title} />
			<div className="card__content">
				<h3 className="card__title">{title}</h3>
				<div className="card__footer">
					<p className="card__date-delivery">{dateDelivery}</p>
					<button className="card__button"
						onClick={onClickAddToCart}
						onMouseEnter={() => setText('В корзину')}
						onMouseLeave={() => setText(`${price} ₽`)}
					>{text}</button>
				</div>
			</div>
		</article>
	)
}