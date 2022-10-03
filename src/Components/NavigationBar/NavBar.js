import { Link } from "react-router-dom";

export default function NavBar() {
    return (
      <div>
        <Link to="/home">
          <button variant="outlined">
            Home
          </button>
        </Link>
      </div>
    );
}
  