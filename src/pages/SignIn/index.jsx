import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import logoImg from "../../assets/logo.svg";

export function SignIn() {
  return (
    <Container>
      <div className='brand'>
        <img src={logoImg} alt='' />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Faça login</h1>

        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <Input placeholder='Exemplo: exemplo@exemplo.com.br' type='text' />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='password'>Senha</label>
          <Input placeholder='No mínimo 6 caracteres' type='password' />
        </div>

        <Button title='Entrar' />

        <ButtonText title='Criar uma conta' />
      </Form>
    </Container>
  );
}
