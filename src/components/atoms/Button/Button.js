import propTypes from 'prop-types'
import styles from './Button.module.scss'

const Button = ({ label, onClickHandler }) => {
  return (
    <button
      onClick={onClickHandler}
      className={`${styles.button} ${styles['button--outline']}`}
      type="button"
    >
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  label: propTypes.string
}

Button.displayName = 'Button'

export default Button
