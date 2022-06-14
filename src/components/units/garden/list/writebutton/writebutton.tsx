import styled from '@emotion/styled';
import { Box, Modal } from '@mui/material';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import GardenWriteContainer from '../../../GardenWrite/GardenWrite.container';

export const ButtonWrite = styled.button`
  width: 60px;
  height: 60px;
  background: #ffb950;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

  position: fixed;
  right: 15px;
  bottom: 80px;
  z-index: 10;
  border-radius: 50%;
  border: none;
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const AddIcon = styled(AiOutlinePlus)`
  font-size: 20px;
  color: white;
`;

export default function GardenWriteBtn() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickWriteBtn = () => {
    handleOpen();
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    height: 'auto',
    bgcolor: 'none',
    boxShadow: 'none',
    p: 2,
    borderRadius: '25px',
  };

  return (
    <>
      <ButtonWrite onClick={onClickWriteBtn}>
        <AddIcon />
      </ButtonWrite>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <GardenWriteContainer handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
