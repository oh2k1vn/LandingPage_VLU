import Cookie from 'js-cookie';

export const getLangLC = () => {
  return Cookie.get('lang').toString() || 'vn';
}
