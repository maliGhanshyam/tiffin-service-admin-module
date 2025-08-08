export interface ConfirmationDialogProps {
    open: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onConfirm: () => void;
    confirmButtonText?: string;
    cancelButtonText?: string;
    actionType:"approve" | "reject" | null;
  }