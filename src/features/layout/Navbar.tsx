import styled from "styled-components/macro";
import { useAppDispatch } from "../../app/hooks";
import { hideNav, useLayoutSlice } from "./layoutSlice";

const Wrapper = styled.div<{ showNav: boolean }>`
  height: 100%;
  width: 240px;
  display: ${({ showNav }) => (showNav ? "block" : "none")};
  background-color: blue;
`;

export const Navbar = () => {
  const { hasNavbar } = useLayoutSlice();
  const dispatch = useAppDispatch();

  return (
    <Wrapper showNav={hasNavbar}>
      <h1>NavBar</h1>

      {/* I don't like this doubble function call seems like it could be simplified */}
      <button onClick={() => dispatch(hideNav())}>Hide nav</button>
    </Wrapper>
  );
};
