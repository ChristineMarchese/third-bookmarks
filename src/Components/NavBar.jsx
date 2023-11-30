import { Link } from "react-router-dom";



const NavBar = () => {

    return (

         <nav>
           {/* anchor tags will refresh or redirect to another page
           // Link tag will not refresh
           // dont want the react apps to refresh
           // Link tag will tell you where to go
           // link tags changes what is in the url, route is listening 
           to the path prop to match the path in the url
            */}
          <Link to={"/"}>
              <h1>Bookmarks App</h1>
            </Link>
            <ul>
              <li>
                <Link to={"/bookmarks"}>Bookmarks</Link>
              </li>
              <li>
                <Link to="/new">Create Bookmarks</Link>
              </li>
            </ul>
         </nav>
    );
};

export default NavBar;