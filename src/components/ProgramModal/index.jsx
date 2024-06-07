import React from 'react';
import { MdClose } from 'react-icons/md';
import { ModalStyling } from './styles';
import MyButton from '../MyButton';
import { Col, Input, Row } from 'antd';

const ProgramModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <ModalStyling
      closable={false}
      title={false}
      footer={false}
      open={isModalOpen}
      width={500}
      centered
    >
      <div className='modalHeader'>
        <p>XTC AFFILIATE PROGRAM</p>
        <MdClose onClick={() => setIsModalOpen(false)} />
      </div>
      <div className='modalBody'>
        <p>
          Earn up to 2.5% for referrals and 5% for being referred in USDT or
          BNB. To Activate, Minimum $20 XTC Token purchase required. Rewards
          align with purchase currency.
        </p>
        <Row gutter={16}>
          <Col xs={12}>
            <div className='tokenBtn'>
              <span>UNCLAIMED REWARDS</span>
              <div>
                <img src='/images/dollar-icon.svg' alt='' />
                <span>60.50</span>
              </div>
            </div>
          </Col>
          <Col xs={12}>
            <div className='tokenBtn'>
              <span>TOTAL REWARDS</span>
              <div>
                <img src='/images/dollar-icon.svg' alt='' />
                <span>110.20</span>
              </div>
            </div>
          </Col>
        </Row>
        <div className='claimBtn'>
          <MyButton handleClick={() => setIsModalOpen(false)}>claim</MyButton>
        </div>
        <p className='inputLabel'>ENTER YOUR FRIENDS REFERRAL CODE</p>
        <Input
          placeholder='Enter referral code'
          suffix={<button>paste</button>}
        />
        <p className='inputLabel'>SHARE YOUR REFERRAL CODE TO YOUR FRIEND</p>
        <div className='codeBtn'>
          <MyButton handleClick={() => setIsModalOpen(false)}>
            0x08209ufnuq3982hr802h3r08j3
          </MyButton>
        </div>
      </div>
    </ModalStyling>
  );
};

export default ProgramModal;
