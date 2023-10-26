// Styles
import { CardContainer, 
    ImageBackground, 
    Content,
     UserInfo, 
     UserPicture, 
     PostInfo, 
     HasInfo } from './styles'

// Icons
import { FiThumbsUp } from 'react-icons/fi';

export default function Card() {
  return (
    <CardContainer>
        <ImageBackground src='https://picsum.photos/700/400'/>
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/69120000?v=4'/>
                <div>
                    <h4>João Victor</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS.</h4>
                <p>Projeto feito para o curso de HTML e CSS no bootcamp dio do Global Avanade...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}
