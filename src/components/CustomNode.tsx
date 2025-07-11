import React from 'react';
import { Handle, Position } from 'reactflow';
import whatsappIcon from '../images/whatsAppIcon.png';
import messageIcon from '../images/blackMessageIcon.png';
import { Header, NodeContainer, Content, HeaderLeft, Icon, WhatsAppIcon } from './CustomNode.styles';


type Props = {
  data: {
    label: string;
    onChange: (val: string) => void;
  };
};

export default function CustomNode({ data }: Props) {
  return (
    <NodeContainer>
      <Handle type="target" position={Position.Left} />
      <Header>
        <HeaderLeft>
          <Icon src={messageIcon} alt="message" />
          Send Message
        </HeaderLeft>
        <WhatsAppIcon src={whatsappIcon} alt="WhatsApp" />
      </Header>
      <Content>{data.label || 'Type your message...'}</Content>
      <Handle type="source" position={Position.Right} />
    </NodeContainer>
  );
}
