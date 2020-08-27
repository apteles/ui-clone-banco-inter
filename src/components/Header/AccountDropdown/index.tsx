import React from 'react';

import { useTheme } from 'styled-components';

import * as S from './styles';

const removeFirstElementStr = (str: string): string => str.slice(1);

type User = {
  user: { name: string };
};

const AccountDropdown: React.FC<User> = ({ user }) => {
  const { lightGrey, primary } = useTheme().colors;
  return (
    <S.Container>
      <img
        src={`https://ui-avatars.com/api/?background=${removeFirstElementStr(
          lightGrey,
        )}&color=${removeFirstElementStr(primary)}&name=${user.name}`}
        alt="avatar"
      />
    </S.Container>
  );
};

export default AccountDropdown;
