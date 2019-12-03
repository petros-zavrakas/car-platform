import styled from "styled-components";

export const Image = styled.img.attrs(props => ({
  src: props.src,
  srcSet: props.srcset,
  alt: props.alt
}))``;
