import * as Styles from "styles/pages/login/styles";

import { Input, Button } from "antd";

import { withTheme } from "styled-components";

import { AuthImage } from "assets/icons";

 function Login({ theme }) {
  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Form>
          <Styles.Title>LOGIN</Styles.Title>
          <Input type="text" placeholder="Usuário" size="large" />

          <Input type="password" placeholder="Senha" size="large" />

          <Button type="primary" size="large" block>
            Entrar
          </Button>
        </Styles.Form>
      </Styles.Content>
      <Styles.Aside>
        <AuthImage primary={theme.colors.primary} />
      </Styles.Aside>
    </Styles.Container>
  );
}

export default withTheme(Login)