import React from 'react';

import * as S from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import Gradient from '../Gradient';

const Header: React.FC = () => {
  const user = {
    name: 'André Teles',
  };
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.LeftNav>
            <BancoInter />
            Iternet banking
          </S.LeftNav>

          <S.RightNav>
            <Button>Simulador renda fixa</Button>
            <AccountDropdown user={user} />
          </S.RightNav>
        </S.Wrapper>
      </S.Container>
      <Gradient />
    </>
  );
};

export default Header;
