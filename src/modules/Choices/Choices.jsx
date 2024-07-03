import './choices.scss'
export const Choices = ({ children }) => {
	return (
		<div className="choices">
			<button className="choices__btn" type="button">Цена</button>
			<div className="choices__box">
				{children}
			</div>
		</div>
	)
}