import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function NavBar() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <br/>
        <ButtonGroup>
          <Link to="/home">
            <Button>
              Home
            </Button>
          </Link>
          &nbsp;
          <Link to="/about">
            <Button>
              About
            </Button>
          </Link>
        </ButtonGroup>
        <br/>
      </div>
    );
}
  