import { ConfigProvider, theme as andttheme } from "antd";

import PT_BR from "antd/locale/pt_BR";

import { ThemeProvider as StyledComponentsTheme } from "styled-components";

import { theme } from "theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <StyledComponentsTheme theme={theme}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.colors.primary,
          colorText: theme.colors.text,
        },
        components: {
          Layout: {
            colorBgBase: theme.colors.background,
            colorBgHeader: theme.colors.background,
            colorBgTrigger: theme.colors.backgroundLogo,
            
          },
          Menu: {
            colorBgBase: theme.colors.background,

            colorItemTextHover: theme.colors.primary,
            colorItemText: theme.colors.primary,
          },
        },
      }}
      locale={PT_BR}
    >
      {children}
    </ConfigProvider>
  </StyledComponentsTheme>
);
