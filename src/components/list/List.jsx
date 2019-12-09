import React from "react";
import uuidv1 from "uuid/v1";

const List = ({ items, Component, ...rest }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={uuidv1()}>
          <Component item={item} {...rest} />
        </li>
      ))}
    </ul>
  );
};

export default List;
