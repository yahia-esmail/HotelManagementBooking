import styled from 'styled-components';

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    width: 100%;
    justify-content: space-between;

    & button {
      flex: 1;
      min-width: 80px;
    }
  }
`;

export default ButtonGroup;
