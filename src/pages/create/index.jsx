import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

// api
import { api } from '../../services/api';

// styles
import { ContainerCreate, Title, Wrapper, Column, TitleCreate, SubTitleCreate, FazerLogin } from "./styles";

// components
import Header from "../../components/Header";
import Button from "../../components/Button";
import Input from "../../components/Input";

// icons
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'

const schema = yup
  .object({
    name: yup.string().required('Campo Obrigatório'),
    email: yup.string().email('Email Invalido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório'),
  }).required()

export default function Create() {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}`);

            if(data.length === 0){
                const { data } = await api.post('users', {
                    name: formData.name,
                    email: formData.email,
                    senha: formData.password,
                });
                if(data.id){
                    alert('Usuário cadastrado com sucesso!')
                    navigate('/login');
                } else{
                    alert('Houve um erro, tente novamente.')
                }
            }else{
                alert('Email já cadastrado')
            }
        } 
        catch{
            alert('Houve um erro, tente novamente.')
        }
    }

  return (
    <>
        <Header/>
        <ContainerCreate>
                <Column>
                    <Wrapper>
                        <Title>
                            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                        </Title>
                    </Wrapper>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCreate>
                            Comece agora grátis
                        </TitleCreate>
                        <SubTitleCreate variant="primary">
                            Crie sua conta e make the change._
                        </SubTitleCreate>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input leftIcon={<MdPerson/>} name="name" placeholder="Nome completo" control={control} errorMessage={errors.name?.message}/>
                            <Input leftIcon={<MdEmail/>} name="email" placeholder="E-mail" control={control} errorMessage={errors.email?.message} type="email"/>
                            <Input leftIcon={<MdLock/>} name="password" placeholder="Password" control={control} errorMessage={errors.password?.message} type="password"/>
                            <Button title='Criar minha conta' variant = "secondary" type="submit"/>
                        </form>
                        <SubTitleCreate variant="secondary">
                            Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </SubTitleCreate>
                        <FazerLogin variant="branco">Já tenho conta.</FazerLogin>
                        <FazerLogin onClick={() => navigate('/login')}>Fazer login</FazerLogin>
                    </Wrapper>
                </Column>
        </ContainerCreate>
    </>
  )
}
