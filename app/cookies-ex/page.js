import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const testCookieValue = cookies().get('testCookie');
  // console.log(testCookieValue);
  return (
    <div>
      <div>Cookie Value: {testCookieValue.value}</div>
      <SetCookieForm />
    </div>
  );
}
