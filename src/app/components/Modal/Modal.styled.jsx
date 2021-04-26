import styled from "styled-components";

export const ModalCard = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ModalContent = styled.div`
    width: 500px;
    background-color: #fff;
`;

export const ModalTitle = styled.div`
    margin: 0;
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
`;

export const ModalHeader = styled.div`
    padding: 10px;
`;

export const ModalThumbnail = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

export const ModelFooter = styled.div`
    padding: 10px;
`;