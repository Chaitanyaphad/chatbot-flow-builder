import styled from 'styled-components';

// Entire Page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
`;


// Horizontal Row: Graph + Sidebar
export const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

// Flow Canvas
export const GraphWrapper = styled.div`
  flex: 1;
`;

// Right Sidebar
export const Sidebar = styled.div`
  width: 350px;
  border-left: 1px solid #ddd;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

// Toolbar at top
export const Toolbar = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  background: #f1f1f1;
  border-bottom: 1px solid #ddd;
  align-items: center;
  justify-content: end;
  box-sizing: border-box;
  margin: 0;
`;


export const Button = styled.button`
  background-color: #fff;
  color: blue;
  padding: 0.4rem 1rem;
  border: 2px solid blue;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Arial', sans-serif;
  margin-right: 110px;
  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

export const SidebarButton = styled.div`
  width: 130px;
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid blue;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  cursor: grab;
  font-size: 14px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  color: #333;
  font-family: 'Arial', sans-serif;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SidebarButtonIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

export const SidebarButtonTitle = styled.div`
  color: blue;
  font-weight: 600;
`;

export const SettingsHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0.5rem;
  font-family: 'Arial', sans-serif;
  border-bottom: 1px solid #eee;
`;

export const BackArrow = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-right: 1rem;
  cursor: pointer;
  user-select: none;
  color: grey;
`;

export const PanelTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: grey;
  margin-left: 65px;
  font-family: 'Arial', sans-serif;
  
`;

export const SettingsContent = styled.div`
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid lightGray;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 0.5rem;
  font-family: 'Arial', sans-serif;
  color: lightGray;
`;

export const TextInput = styled.textarea`
  width: 90%;
  min-height: 80px;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 8px;
  font-size: 14px;
  resize: vertical;
  font-family: 'Arial', sans-serif;
  box-sizing: border-box;
`;

export const ErrorBanner = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: #f8d7da;
  color: #721c24;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  z-index: 10;
  border: 1px solid #f5c6cb;
  margin-top: 10px;
`;