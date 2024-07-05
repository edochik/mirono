import './choices.scss'
import classnames from "classnames"
export const Choices = ({ children, buttonLabel, className, isOpen, onClickToggle }) => {

	return (
		<div className={classnames('choices', className)}>
			<button
				className="choices__btn"
				type="button"
				onClick={onClickToggle}
			>{buttonLabel}</button>
			{isOpen && <div className="choices__box">{children}</div>}
		</div>
	)
}