export function stripPhoneNumber(phone) {
  const regex = /[^\d]/g;
  return phone.replace(regex, "");
}