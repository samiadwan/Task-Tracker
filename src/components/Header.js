import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onAdd ,showAdd}) =>{ // can just put parameter as object instead of props {obj}


  return(
    <header className='header'>
      <h1 >{title}</h1>
      <Button color={showAdd? 'red':'green'}
      text={showAdd ? 'Close':'Add'}
      onClick={onAdd}/>
    </header>

  )
}

Header.defaultProps = { //if title is not declear in app so default value will set here
  title: 'Task Tracker',
}

Header.propTypes = { // if the object is not string we can do this to convert ist string
  title: PropTypes.string.isRequired,
}

//css in js
// const headingStyle = {
//   color:'green',
//backgroundColor:'black',
// }

export default Header
