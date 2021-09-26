import { toast, Slide } from "react-toastify";


export const errorMessage = (message) => {
  toast.error(message, {
    className: "toast-container-error",
    transition: Slide,
    autoClose: 3500,
    draggable: true,
    closeOnClick: true,
  });
};