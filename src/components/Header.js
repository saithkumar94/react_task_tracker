import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
        <h1>
            {title}
        </h1>
    </header>
  )
}

Header.defaultProps = {
    title: 'Default title from Header.js'
}

Header.propTypes = {
    title: PropTypes.string.isRequired, 
}


export default Header
