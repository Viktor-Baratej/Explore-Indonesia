import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function showMessage(title, message) {
  iziToast.show({
    title,
    message,
    position: 'topCenter',
    timeout: 3000,
    class: 'my-toast'
  });
}
