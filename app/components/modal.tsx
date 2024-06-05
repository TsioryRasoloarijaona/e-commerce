import AppointmentForm from "./buttonClick/appointmentForm";
import {
  Modal,
  ModalOverlay
} from "@chakra-ui/react";
interface modalProp {
  idCar : number;
  open: boolean;
  close: () => void;
}
const ModalCompenent: React.FC<modalProp> = ({idCar,  open, close }) => {
  return (
    <div>
      <Modal isOpen={open} onClose={close} size={"md"} isCentered>
        <ModalOverlay />
        <AppointmentForm idCar={idCar}/>
      </Modal>
    </div>
  );
};

export default ModalCompenent;
