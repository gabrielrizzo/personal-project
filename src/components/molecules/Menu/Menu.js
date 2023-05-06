import styles from './Menu.module.scss'
import Icon from '@/components/atoms/Icon/Icon'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <div className={styles['menu__main-text']}>
                <h1>Gabriel.dev</h1>
                <Icon fill={true} icon="Code" />
            </div>
            <nav>
                <ul>
                    <a href="#about" >About me</a>
                </ul>
            </nav>
        </div>
    )
}

Menu.displayName = 'Menu'

export default Menu