
import styled from "styled-components";

import { Layout } from "antd";

export const Footer = styled(Layout.Footer)`
    text-align: center !important;
    align-items: center !important;
    background: ${({ theme }) => theme.colors.backgroundLogo} !important;
    height: 2rem !important;
    justify-content: center !important;
    display: flex !important;
`;

export const Text = styled.p`
    color: ${({ theme }) => theme.colors.background};
`;


