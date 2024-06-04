import { RestartIcon } from '../../assets/images/Icons/RestartIcon';
import { CloseIcon } from '../../assets/images/Icons/CloseIcon';
import { Overlay, ModalBody, ModalHeader, ModalContent, ModalActions } from './styles';

interface RestartDayModalProps {
  onClose: () => void;
  isVisible: boolean;
}

export function RestartDayModal({ onClose, isVisible = true }: RestartDayModalProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <ModalHeader>
          <div>
            <RestartIcon style={{ color: 'rgba(102, 102, 102, 1)' }} />
            <span>Reiniciar dia</span>
          </div>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </ModalHeader>
        <ModalContent>
          <span>
            Ao reiniciar o dia, todos os pedidos serão arquivados no status atual.
          </span>
          <span>
            Deseja reiniciar o dia?
          </span>
        </ModalContent>
        <ModalActions>
          <button className='secondary' onClick={onClose}>Não, continuar pedidos</button>
          <button className='primary'>Sim, reiniciar dia</button>
        </ModalActions>
      </ModalBody>
    </Overlay>
  )
}
