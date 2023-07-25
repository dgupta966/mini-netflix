import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error">
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
      <a href="/">🏠 Home</a>
    </div>
  );
};

export default Error;
