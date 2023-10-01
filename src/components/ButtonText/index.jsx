import { Container } from './styles';

export function ButtonText({ title, icon: Icon, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={32} />}
      {children}
      {title}
    </Container>
  );
}
