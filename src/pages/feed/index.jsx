// styles
import { ContainerFeed,
  Title,
  TitleHighlight,
  Column 
} from './styles';

// Components
import Header from '../../components/Header';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

export default function Feed() {
  return (
    <>
        <Header autenticado={true}/>
        <ContainerFeed>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
            <UserInfo percentual={50} nome="João Victor" image="https://avatars.githubusercontent.com/u/69120000?v=4"/>
            <UserInfo percentual={27} nome="João Victor" image="https://avatars.githubusercontent.com/u/69120000?v=4"/>
            <UserInfo percentual={89} nome="João Victor" image="https://avatars.githubusercontent.com/u/69120000?v=4"/>
            <UserInfo percentual={57} nome="João Victor" image="https://avatars.githubusercontent.com/u/69120000?v=4"/>
          </Column>
        </ContainerFeed>
    </>
  )
}
