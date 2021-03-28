import React, { Fragment, useContext } from "react";
import { FilterContext } from "../../context/FiltersContext";
import "./home.scss";

export const HomePage = () => {
  const filtersCtx = useContext(FilterContext);

  return (
    <Fragment>
      <div className="home">
        {filtersCtx?.defaultContent.map((value) => (
          <div className="table" key={value.id}>
            <img src={value.url} alt="" />
          </div>
        ))}
      </div>
    </Fragment>
  );
};
