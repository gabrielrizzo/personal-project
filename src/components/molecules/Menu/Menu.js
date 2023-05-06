import styles from './Menu.module.scss'
import Icon from '@/components/atoms/Icon/Icon'

const Menu = () => {
    return (
        <div className={styles.menu}>
            <h1>Gabriel.dev <Icon fill={true} icon="Code" /></h1>
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