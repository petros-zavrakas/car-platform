import React, { useState, useEffect } from "react";

const Image = ({ name, label }) => {
  const [src, setSrc] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    loadImage(name, label);
  }, []);

  const loadImage = (name, label) => {
    import(`../../../assets/images/${name}.jpg`).then(image => {
      setSrc(image.default);
      setAlt(label);
    });
  };

  return <img src={src} alt={alt} />;
};

export default Image;