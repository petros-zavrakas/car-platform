export const useIcons = () => {
  let images = {};
  const r = require.context(
    "../../assets/images/icons",
    false,
    /\.(png|jpe?g|svg)$/
  );
  r.keys().map((item, index) => {
    images[
      item
        .split("/")
        .pop()
        .split(".")[0]
    ] = r(item);
  });

  return images;
};