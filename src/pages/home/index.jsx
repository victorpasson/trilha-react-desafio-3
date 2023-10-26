// styles
import { ContainerHome,
  Title,
  TitleHighlight,
  TextContent 
} from './styles';

// images
import bannerImage from '../../assets/banner.webp';

import { useNavigate } from 'react-router-dom';

// Components
import Button from '../../components/Button';
import Header from '../../components/Header';

export default function Home() {
  const navigate = useNavigate();
  
  const handleClickSignIn = () => {
    navigate('/login');
  }

  return (
    <>
        <Header/>
        <ContainerHome>
          <div>
            <Title>
              <TitleHighlight>
                Implemente
                <br/>
              </TitleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
          </div>
          <div>
            <img src={bannerImage} alt='Imagem Principal' width={800}/>
          </div>
        </ContainerHome>
    </>
  )
}
