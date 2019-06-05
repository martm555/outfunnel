import {Contact} from '../../types';

export default (contacts): [Contact] => {
  return contacts.map((item: any) => {
    return {
      emails: item.email_address ? [item.email_address] : [],
      fullName: `${item.merge_fields.FNAME} ${item.merge_fields.LNAME}`.trim(),
      phones: item.PHONE ? [item.PHONE] : [],
    };
  });
};
