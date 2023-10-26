import { useNavigate } from 'react-router-dom'

// images
import Logo from '../../assets/logo.png'

import { 
    HeaderContainer,
    BuscarInputContainer,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper,
    UserPicture
  } from "./styles"
import Button from "../Button"

export default function Header({autenticado}) {
  const navigate = useNavigate();

  return (
    <Wrapper>
        <HeaderContainer>
            <Row>
                <img src={Logo} alt="Logo Dio" onClick={() => navigate("/")}/>
                {autenticado && (
                  <>
                  <BuscarInputContainer>
                    <Input placeholder="Buscar.."/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
                  </>
                )}
            </Row>
             <Row>
                {autenticado && (
                  <UserPicture src="https://avatars.githubusercontent.com/u/69120000?v=4"/>
                )}
                {!autenticado && (
                  <>
                    <MenuRight href="#" onClick={() => navigate("/")}>Home</MenuRight>
                    <Button title="Entrar" onClick={() => navigate("/login")}/>
                    <Button title="Cadastrar" onClick={() => navigate("/create")}/>
                  </>
                )}
                
            </Row>
        </HeaderContainer>
    </Wrapper>
  )
}
