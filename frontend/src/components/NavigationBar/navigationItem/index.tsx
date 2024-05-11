import { ActiveIndicator, LinkItemContainer } from "./styles";

interface LinkItemProps {
  Icon: React.ReactNode;
  linkText: string;
  isActive: boolean;
  onSelectedLink(): void;
}

export function LinkItem({ Icon, linkText, isActive, onSelectedLink }: LinkItemProps) {
  return (
    <LinkItemContainer onClick={onSelectedLink}>
      {Icon}
      <span style={{
        fontWeight: 500,
        color: isActive ? 'red' : ''
      }}
        >
          {linkText}
        </span>
      <ActiveIndicator isActive={isActive} />
    </LinkItemContainer>
  )
}
