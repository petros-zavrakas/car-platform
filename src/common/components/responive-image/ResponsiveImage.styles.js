import styled from "styled-components";

export const Image = styled.img.attrs(props => ({
  src: props.src,
  srcSet: props.srcset,
  alt: props.alt
}))`
  width: 100%;
`;

export const Test = styled.div`
  width: 100%;
`;
