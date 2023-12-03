import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <div>oops... Something went wrong!</div>;
      <div>
        Click to return <Link to="/">Home</Link>
      </div>
      ;
    </>
  );
}
