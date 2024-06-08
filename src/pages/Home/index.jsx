import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import { HeroSection } from "./styles";
import { Col, Input, Progress, Row } from "antd";
import MyButton from "../../components/MyButton";
import ClaimModal from "../../components/ClaimModal";
import ProgramModal from "../../components/ProgramModal";

const Home = () => {
  const [claimModal, setClaimModal] = React.useState(false);
  const [programModal, setProgramModal] = React.useState();
  return (
    <>
      <Header />
      <HeroSection>
        <Container>
          <Row gutter={{ lg: 20 }}>
            <img className="personImg" src="/images/artBoard.png" alt="" />
            <Col xxl={15} lg={12} xs={24} style={{ height: "auto" }}>
              <div className="sectionInfo">
                <div className="infoTitles">
                  <img src="/images/CompositeLayer.svg" alt="" />
                  <h3>
                    Step into the fans revolution. Join this presale journey to
                    be part of reshaping the intersection of technology and
                    finance.
                  </h3>
                </div>
                <div className="infoButtons">
                  <div>
                    <MyButton>Audit Report</MyButton>
                  </div>
                  <div>
                    <MyButton>Whitepaper</MyButton>
                  </div>
                </div>
              </div>
            </Col>
            <Col xxl={9} lg={12} xs={24}>
              <div className="sectionCard">
                <div className="cardHeader">
                  <h2>Buy $XTC Tokens</h2>
                  <div className="label">
                    <div></div>
                    <span>Live</span>
                  </div>
                </div>
                <Progress
                  percent={40}
                  percentPosition={{
                    align: "center",
                    type: "inner",
                  }}
                  size={["100%", 30]}
                  strokeColor="var(--orange)"
                  trailColor="var(--white)"
                />
                <div className="cardLabel">
                  <p>1 x $XTC = $0.00023</p>
                  <div></div>
                  <p>LISTING PRICE = $0.00065</p>
                </div>
                <div className="connectWallet">
                  <Row gutter={16}>
                    <Col xs={12}>
                      <div className="tokenBtn">
                        <span>TOKENS SOLD</span>
                        <div>
                          <img src="/images/token-icon.svg" alt="" />
                          <span>100,000,000</span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="tokenBtn">
                        <span>TOKENS SOLD</span>
                        <div>
                          <img src="/images/token-icon.svg" alt="" />
                          <span>100,000,000</span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={24}>
                      <p>CONNECT WALLET</p>
                    </Col>
                    <Col xs={12}>
                      <div className="tokenBtn">
                        <span>TOKENS SOLD</span>
                        <div>
                          <img src="/images/token-icon.svg" alt="" />
                          <span>100,000,000</span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="tokenBtn">
                        <span>TOKENS SOLD</span>
                        <div>
                          <img src="/images/token-icon.svg" alt="" />
                          <span>100,000,000</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="buySection">
                  <Row gutter={[16, 16]}>
                    <Col xs={12}>
                      <div className="buyBtn">
                        <MyButton>
                          <img src="/images/bnb-icon.svg" alt="" />
                          <span>BUY WITH BNB</span>
                        </MyButton>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <div className="buyBtn">
                        <MyButton>
                          <img src="/images/usdt-icon.svg" alt="" />
                          <span>BUY WITH USDT</span>
                        </MyButton>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <Input
                        placeholder="Enter amount"
                        prefix={<img src="/images/usdt-icon.svg" alt="" />}
                      />
                    </Col>
                    <Col xs={12}>
                      <Input
                        placeholder="0.00"
                        prefix={<img src="/images/token-icon.svg" alt="" />}
                      />
                    </Col>
                  </Row>
                </div>
                <div className="cardFooter">
                  <div className="footLabel">
                    <p onClick={() => setProgramModal(true)}>
                      View Referral Program
                    </p>
                    <p onClick={() => setClaimModal(true)}>Claim your tokens</p>
                  </div>
                  <div className="buyBtn">
                    <MyButton>BUY $BTCFANS</MyButton>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </HeroSection>
      {/* Modals */}
      <ClaimModal isModalOpen={claimModal} setIsModalOpen={setClaimModal} />
      <ProgramModal
        isModalOpen={programModal}
        setIsModalOpen={setProgramModal}
      />
    </>
  );
};

export default Home;
