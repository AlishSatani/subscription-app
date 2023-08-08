import {
  Button,
  Dialog,
  DialogProps
} from "@material-tailwind/react";

interface ModalProps extends Omit<DialogProps, "ref"> {
  open: boolean;
  name: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  handler,
  children,
  name,
  ...props
}) => {
  return (
    <>
      <Button onClick={handler} variant="gradient">
        {name}
      </Button>
      <Dialog open={open} handler={handler} size="sm" {...props}>
        {children}
      </Dialog>
    </>
  );
};

export default Modal;
