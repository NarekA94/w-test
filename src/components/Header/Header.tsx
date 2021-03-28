import React, { useContext, useState } from "react";
import { FilterContext } from "../../context/FiltersContext";
import "./header.scss";

const categories = [
  {
    name: "Popular",
    id: 1,
  },
  {
    name: "Favorit",
    id: 2,
  },
  {
    name: "New",
    id: 3,
  },
];

export const Header = () => {
  const [value, setValue] = useState<number>(0);
  const ctx = useContext(FilterContext);
  function handleChangeCategory(id: number) {
    setValue(id);
    ctx.filter(id);
  }
  return (
    <div className="header">
      <h1>Courses</h1>
      <div className="filters">
        {categories.map((category) => (
          <div key={category.id} className="field">
            <p
              style={{ color: value === category.id ? "#8964D7" : "#cbb1a2" }}
              onClick={() => handleChangeCategory(category.id)}
            >
              {category.name}
            </p>
            {value === category.id && <span className="border" />}
          </div>
        ))}
      </div>
    </div>
  );
};
