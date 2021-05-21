import React,{useRef,useEffect} from 'react';

 import { Container,Messages,InputWrapper,Input,InputIcon } from './styles';

 import ChannelMessage,{Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
       const div = messagesRef.current;

       if(div){
           div.scrollTop = div.scrollHeight;
       }
    },[messagesRef])

  return <Container>
         <Messages ref={messagesRef}>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/><ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>
             <ChannelMessage author="Leandro Pereira" date="21/06/2021" content="Hoje e um aniversario"/>

             <ChannelMessage author="Bot Alfred" date="21/06/2021" content={
               <>
                 <Mention>@Leandro Pereira</Mention>,me carrega no Lol
               </>
             } hasMention isBot/>
         </Messages>
         <InputWrapper>
          <Input type="text" placeholder="Conversar --chat-livre"/>
          <InputIcon /> 
        </InputWrapper> 
  </Container>;
}

export default ChannelData;