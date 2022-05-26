import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const User = styled.span`
  margin-right: 12px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  color: #978a8a;
`;

export const LogOutButton = styled.button`
  display: inline-block;
  padding: 10px;
  border-radius: 10px;
  background: #978a8a;
  text-transform: uppercase;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: transparent;
    color: #978a8a;
  }
`;
