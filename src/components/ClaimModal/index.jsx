import React from 'react';
import { MdClose } from 'react-icons/md';
import { ModalStyling } from './styles';
import MyButton from '../MyButton';

const ClaimModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <ModalStyling
      closable={false}
      title={false}
      footer={false}
      open={isModalOpen}
      width={400}
      centered
    >
      <div className='modalHeader'>
        <p>CLAIM YOUR TOKENS</p>
        <MdClose onClick={() => setIsModalOpen(false)} />
      </div>
      <div className='modalBody'>
        <p>
          Participants can claim their allocated XTC tokens at the end of the
          presale. We appreciate your patience and look forward to your
          successful participation.
        </p>
      </div>
      <div className='modalFooter'>
        <div className='claimBtn'>
          <MyButton handleClick={() => setIsModalOpen(false)}>claim</MyButton>
        </div>
      </div>
    </ModalStyling>
  );
};

export default ClaimModal;
