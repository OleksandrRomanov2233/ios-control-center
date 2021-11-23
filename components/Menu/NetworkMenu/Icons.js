import React from 'react';
import Icon from "./Icon";
import styled from "styled-components/native/dist/styled-components.native.esm";

const Icons = ({icons}) => {
    return (
        <ChildContainer>
            {icons.map(el => <Icon key={el} image={el} />)}
        </ChildContainer>
    );
};

const ChildContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export default Icons;