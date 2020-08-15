import styled from 'styled-components';

export const PreloaderWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

export const PreloaderInner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
