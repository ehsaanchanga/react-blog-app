import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <h1>404 NOT FOUND</h1>
      <Link to="/">
        <h3>Back to homepage..</h3>
      </Link>
    </div>
  );
};

export default NotFound;
