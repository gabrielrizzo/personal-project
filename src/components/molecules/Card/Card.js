import styles from './card.module.scss'
import Image from 'next/image'
import propTypes from 'prop-types'
import Button from '@/components/atoms/Button/Button'
import Icon from '@/components/atoms/Icon/Icon'

const Card = ({ label, description, img, stars, link }) => {
  const openUrl = () => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={styles.card}>
      <div className={styles['card__img-container']}>
        <Image src={img} alt="card-img" width={120} height={120}></Image>
        <div className={styles['card__icon-container']}>
          <span>{stars}</span>
          <Icon fill={true} icon="star" />
        </div>
      </div>
      <div className={styles['card__text-container']}>
        <span>{label}</span>
        <p>{description}</p>
      </div>
      <div className={styles['card__btn-container']}>
        <Button onClickHandler={openUrl} label="Saiba mais" />
      </div>
    </div>
  )
}

Card.propTypes = {
  label: propTypes.string,
  description: propTypes.string,
  stars: propTypes.number
}

Card.displayName = 'Card'

export default Card
