import AppointmentForm from "./buttonClick/appointmentForm";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
interface modalProp {
  content: React.ReactNode;
  open: boolean;
  close: () => void;
}
const ModalCompenent: React.FC<modalProp> = ({ content, open, close }) => {
  return (
    <div>
      <Modal isOpen={open} onClose={close} >
        <ModalOverlay />
        <AppointmentForm/>
      </Modal>
    </div>
  );
};

export default ModalCompenent;
