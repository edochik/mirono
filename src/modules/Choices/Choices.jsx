import './choices.scss'
import classnames from "classnames"
import { useState } from "react"
export const Choices = ({ children, buttonLabel, className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClickToggle = () => {
		setIsOpen(prev => !prev)
	}
	return (
		<div className={classnames('choices', className)}>
			<button
				className="choices__btn"
				type="button"
				onClick={onClickToggle}
			>{buttonLabel}</button>
			{isOpen && <div className="choices__box">
				{children}
			</div>}
		</div>
	)
}