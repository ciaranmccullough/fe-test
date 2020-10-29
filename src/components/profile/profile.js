import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  left: 320px;
  top: 44px;
  background: #ffffff;
  border: 1.4px solid #000000;
  box-sizing: border-box;
  border-radius: 200px;
`;

const Group6 = styled.div`
  position: absolute;
  width: 29.33px;
  height: 29.33px;
  left: 1.33px;
  top: 1.33px;
`;

const Union = styled.div`
  position: absolute;
  width: 22.67px;
  height: 34.67px;
  left: 5.33px;
  top: 6.67px;
  background: #000000;
`;

const Elipese9 = styled.div`
  position: absolute;
  left: 33.33%;
  right: 33.33%;
  top: 20.83%;
  bottom: 45.83%;
  background: #000000;
`;

const Rectangle18 = styled.div`
  position: absolute;
  left: 16.67%;
  right: 12.5%;
  top: 58.33%;
  bottom: -29.17%;
  background: #000000;
`;

const Mask = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  left: 1px;
  top: 1px;
  background: #c4c4c4;
`;

const Profile = () => {
  return (
    <Container>
      <Group6>
        <Union>
          <Elipese9 />
          <Rectangle18 />
        </Union>
      </Group6>
      <Mask />
    </Container>
  );
};

export default Profile;
