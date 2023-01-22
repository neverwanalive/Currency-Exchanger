import styled from "styled-components";
import { Box as BoxMUI, FormControl as FormControlMUI } from "@mui/material";

export const Main = styled.div`
  height: 100vh;
  margin: -8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d3d3d3;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 48px;
  margin-top: 25px;
`;

export const Modal = styled.div`
  width: 500px;
`;

export const Box = styled(BoxMUI)`
  min-width: 120px;
  display: flex;
  justify-content: space-between;
  :first-child {
    margin-bottom: 20px;
  }
`;

export const FormControl = styled(FormControlMUI)`
  width: 50%;
`;
