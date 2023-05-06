import propTypes from "prop-types"

const Icon = ({ fill, icon }) => {

    const takeIconFill = { fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'GRAD' 0,'wght' 400, 'opsz' 48` }

    return <i className="material-symbols-rounded" style={takeIconFill}>{icon}</i>
}


Icon.propTypes = {
    fill: propTypes.bool,
    icon: propTypes.string.isRequired
}

Icon.defaultProps = {
    fill: true,
}

Icon.displayName = 'Icon'

export default Icon