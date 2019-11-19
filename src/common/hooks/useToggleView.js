import { useState } from "react";

export const useToggleView = initial => {
  const [viewStatus, setViewStatus] = useState(initial);

  return [
    viewStatus,
    () =>
      setViewStatus(elements => {
        for (let key in elements) elements[key] = !elements[key];
        return { ...elements };
      })
  ];
};
