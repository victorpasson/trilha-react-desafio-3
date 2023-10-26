import { Container, UserPicture, NameText, Progress } from './styles'

export default function UserInfo({nome, image, percentual}) {
  return (
    <Container>
        <UserPicture src={image}/>
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </Container>
  )
}
