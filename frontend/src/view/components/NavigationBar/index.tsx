import { NavigationBarContainer } from './styles';

import { LogoTextIcon } from '../../../assets/images/Icons/LogoTextIcon';

import { useNavigationBar } from './useNavigationBar';
import { LinkItem } from './navigationItem';

export function NavigationBar() {
  const { activeLink, handleActiveLink, links, personalLinks } = useNavigationBar();

  return (
    <NavigationBarContainer>
      {<LogoTextIcon />}
      <div>
        {links.map((link, index) => (
          <LinkItem
            key={link.id}
            Icon={link.icon({
              style: activeLink === link.id ? { color: 'red' } : undefined
            })}
            linkText={link.linkText}
            onSelectedLink={() => handleActiveLink(link.id)}
            $isActive={activeLink === link.id}
            path={link.path}
            testId={`link-item-${index}`}
          />
        ))}
      </div>
      <div>
        {personalLinks.map((personalLink, index) => (
          <LinkItem
            key={personalLink.id}
            Icon={personalLink.icon({
              style: activeLink === personalLink.id ? { color: 'red' } : undefined
            })}
            linkText={personalLink.linkText}
            onSelectedLink={() => handleActiveLink(personalLink.id)}
            $isActive={activeLink === personalLink.id}
            path={personalLink.path}
            testId={`personal-link-item-${index}`}
          />
        ))}
      </div>
    </NavigationBarContainer>
  )
}
