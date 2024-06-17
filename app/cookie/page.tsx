import { getCookie } from '../../util/cookies';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const cookieValue = getCookie('Cart');

  return (
    <>
      <div> Cookie Value {cookieValue}</div>
      <SetCookieForm />
    </>
  );
}
