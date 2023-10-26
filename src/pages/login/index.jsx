import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// api
import { api } from '../../services/api';

// styles
import { ContainerLogin,
  Title,
  Column,
  Row, 
  Wrapper,
  TitleLogin,
  SubTitleLogin,
  EsqueciText,
  CriarText
} from './styles';

// Icons
import { MdEmail, MdLock } from 'react-icons/md'

// Components
import Input from '../../components/Input'
import Button from '../../components/Button'
import Header from '../../components/Header'

const schema = yup
  .object({
    email: yup.string().email('Email Invalido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required()

export default function Login() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);

  const onSubmit = async fomData => {
    try{
      const { data } = await api.get(`users?email=${fomData.email}&senha=${fomData.password}`);
      if(data.length === 1){
        navigate('/feed');
      }else{
        alert('Email ou senha invalidos')
      }
    }
    catch{
      alert('Houve um erro, tente novamente.')
    }
  }

  return (
    <>
        <Header/>
        <ContainerLogin>
          <Column>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
          </Column>
          <Column>
            <Wrapper>
              <TitleLogin>
                Faça seu cadastro
              </TitleLogin>
              <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email" control={control} placeholder="Email" errorMessage={errors.email?.message} leftIcon={<MdEmail />}/>
                <Input name="password" control={control} placeholder="Password" errorMessage={errors.password?.message} type="password" leftIcon={<MdLock />}/>
                <Button title="Entrar" variant='secondary' type="submit"/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText onClick={() => navigate('/create')}>Criar Conta</CriarText>
              </Row>
            </Wrapper>
          </Column>
        </ContainerLogin>
    </>
  )
}
