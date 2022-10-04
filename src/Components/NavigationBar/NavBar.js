import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function NavBar() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <br/>
        <ButtonGroup>
          <Link to="/">
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
  