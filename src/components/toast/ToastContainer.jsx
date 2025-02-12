import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toast, ToastContainer } from 'react-bootstrap';
import { hideToast } from '../../redux/toast-slice/toastSlice';

export default function ToastComponent() {
  const dispatch = useDispatch();
  const { message, showToast, variant } = useSelector((state) => state.toast);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        dispatch(hideToast());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast, dispatch]);

  return (
    <ToastContainer position='top-end' className='p-3 position-fixed'>
      <Toast
       onClose={() => dispatch(hideToast())}
        show={showToast}
        delay={3000}
        autohide
        bg={variant}
        animation={true}
      >
        <Toast.Header>
          <strong className='me-auto'>Notification</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
