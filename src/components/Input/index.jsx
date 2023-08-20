import { Container } from './styles';

export function Input({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      {title}
      <input {...rest} />
    </Container>
  );
}
