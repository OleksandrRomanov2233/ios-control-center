import React from 'react';
import {AppContextProvider} from "./AppContext";
import styled from "styled-components/native/dist/styled-components.native.esm";
import Home from "./components/Home";

export default function App() {
    return (
        <AppContextProvider>
            <AppContainer>
                <Home/>
            </AppContainer>
        </AppContextProvider>
    );
}

const AppContainer = styled.View`
  padding-top: 35%;
  width: 100%;
  height: 100%;
  background: #272525;
`;
