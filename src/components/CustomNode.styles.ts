import styled from 'styled-components';

export const NodeContainer = styled.div`
  background: white;
  border-radius: 8px;
  width: 220px;
  font-size: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  border: none;
`;

export const Header = styled.div`
  background: #b4f1ec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  font-weight: 700;
  font-size: 13px;
  font-family: 'Arial', sans-serif;
  border-radius: 8px 8px 0 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Icon = styled.img`
  width: 14px;
  height: 14px;
`;

export const WhatsAppIcon = styled.img`
  width: 10px;
  height: 10px;
  padding: 3px;
  background-color: white;
  border-radius: 50%;
`;

export const Content = styled.div`
  padding: 10px;
  font-family: 'Arial', sans-serif;
  font-size: 13px;
  color: #333;
`;