import { useRouteError } from "react-router";
import React from "react";

export const ErrorPage = () => {
  const error = useRouteError();
  const { data, status, statusText } = error;
 

  return (
    <div>
      <h1>OOPS!!</h1>

      <h2>Something went wrong!!!</h2>
      <h3>
        {status} : {statusText}
      </h3>
      <h3>{data}</h3>
    </div>
  );
};
