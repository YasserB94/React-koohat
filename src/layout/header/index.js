//Children
import Brand from './components/brand'
import Navlink from './components/navlink'
///Styling for header and header components
import './styles.css'

export default function Header(props) {

    return (
        <div id='header'>
            <Brand></Brand>
            <nav>
                <Navlink className="navlink"></Navlink>
                <Navlink className="navlink"></Navlink>
                <Navlink className="navlink"></Navlink>
                <Navlink className="navlink"></Navlink>
            </nav>
            <Brand></Brand>
        </div>
    )
}