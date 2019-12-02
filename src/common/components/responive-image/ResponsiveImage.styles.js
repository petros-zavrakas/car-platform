import styled from "styled-components";

export const Image = styled.img.attrs(props => ({
  srcSet: props.srcset
}))`
  width: 100%;
`;

export const Test = styled.div`
  width: 100%;
`;
