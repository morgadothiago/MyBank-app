import styled from "styled-components/native";
import { Colors } from "../../themes";
export const Container = styled.View`
  flex: 1;
  background-color: green;
`;

export const Header = styled.View`
  background-color: ${Colors.primary};
  height: 25%;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  background-color: ${Colors.secondary};
  flex: 1;
`;
export const ContainerIcon = styled.View`
  width: 90%;
  height: 60px;
`;
