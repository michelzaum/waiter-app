import { useState } from 'react';

import { HomeIcon } from '../../../assets/images/Icons/HomeIcon';
import { HistoryIcon } from '../../../assets/images/Icons/HistoryIcon';
import { MenuIcon } from '../../../assets/images/Icons/MenuIcon';
import { UsersIcon } from '../../../assets/images/Icons/UsersIcon';
import { ProfileIcon } from '../../../assets/images/Icons/ProfileIcon';
import { ExitIcon } from '../../../assets/images/Icons/ExitIcon';

const links = [
  { id: 1, icon: HomeIcon, linkText: 'Home', path: '/' },
  { id: 2, icon: HistoryIcon, linkText: 'Histórico', path: '/history' },
  { id: 3, icon: MenuIcon, linkText: 'Cardapio', path: '/menu' },
  { id: 4, icon: UsersIcon, linkText: 'Usuários', path: '/users' },
];

const personalLinks = [
  { id: 5, icon: ProfileIcon, linkText: 'Meu Perfil', path: '/users' },
  { id: 6, icon: ExitIcon, linkText: 'Sair', path: '/users' },
];

export function useNavigationBar() {
  const [activeLink, setActiveLink] = useState(0);

  function handleActiveLink(linkId: number) {
    setActiveLink(linkId);
  }

  return {
    activeLink,
    handleActiveLink,
    links,
    personalLinks,
  };
}
