
import * as Styles from "./styles";

interface ContentProps {
  children: React.ReactNode;
  content: {
    breadcrumbs: string[];
  };
}

export const Content = ({ children, content }:ContentProps) => {


  return (
    <Styles.Container>
      <Styles.Breadcrumb>
       {
        content.breadcrumbs.map((item, index) => (
          <Styles.Breadcrumb.Item key={index}>
            {item}
          </Styles.Breadcrumb.Item>

        ))
       }
      </Styles.Breadcrumb>

      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  );
};
