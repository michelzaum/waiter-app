import { ActiveIndicator, LinkItemContainer } from "./styles";

interface LinkItemProps {
  Icon: React.ReactNode;
  linkText: string;
  $isActive: boolean;
  path: string;
  testId: string
  onSelectedLink(): void;
}

export function LinkItem({ Icon, linkText, $isActive, onSelectedLink, path, testId }: LinkItemProps) {
  return (
    <LinkItemContainer to={path} onClick={onSelectedLink} data-testid={testId}>
      {Icon}
      <span style={{
        fontWeight: 500,
        color: `${$isActive ? 'red' : ''}`
      }}
      >
        {linkText}
      </span>
      <ActiveIndicator $isActive={$isActive} />
    </LinkItemContainer>
  )
}
