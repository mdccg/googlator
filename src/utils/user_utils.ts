import { UserCredential } from 'firebase/auth';

export const getUser = (): UserCredential['user'] => {
  const jsonUser = `${localStorage.getItem('user')}`;
  const user = <UserCredential['user']>JSON.parse(jsonUser);
  return user;
}