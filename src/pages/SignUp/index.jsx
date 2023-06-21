import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import logoImg from "../../assets/logo.svg";

export function SignUp() {
  return (
    <Container>
      <img src={logoImg} alt='' />

      <Form>
        <h1>Crie sua conta</h1>

        <div className='input-wrapper'>
          <label htmlFor='name'>Seu nome</label>
          <Input placeholder='Exemplo: Maria da Silva' type='text' />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='email'>Email</label>
          <Input placeholder='Exemplo: exemplo@exemplo.com.br' type='text' />
        </div>

        <div className='input-wrapper'>
          <label htmlFor='password'>Senha</label>
          <Input placeholder='No mínimo 6 caracteres' type='password' />
        </div>

        <Button title='Criar conta' />

        <ButtonText title='Já tenho uma conta' />
      </Form>
    </Container>
  );
}
