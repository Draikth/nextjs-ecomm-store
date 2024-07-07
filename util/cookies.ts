import { cookies } from 'next/headers';

export function getCookie(name: string) {
  console.log('name', name);
  const cookie = cookies().get(name);
  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
