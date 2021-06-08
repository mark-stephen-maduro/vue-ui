export default function (str = '') {
  return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/ +/g, ' ');
}
