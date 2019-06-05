import {Contact} from '../../types';

export default (contacts): [Contact] => {
  return contacts.map((item) => {
    return {
      emails: item.email ? item.email.map((e) => e.value.trim()).filter((e) => e) : [],
      fullName: item.name,
      phones: item.phone ? item.phone.map((p) => p.value.trim()).filter((p) => p) : [],
    };
  });
};
