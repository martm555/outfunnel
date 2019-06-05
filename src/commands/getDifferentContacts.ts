/**
 * Compare elements of array to values. Return elements which are
 * in 'values' but not in 'array'. Consider these rules when matching objects
 * (TODO: probably these rules needs some improvement):
 *  - if one field doesnt match with other then these are same persons
 *  - if field is empty then we dont take this into account
 */
import {Contact} from '../types';

const matchingFields = ['fullName', 'emails', 'phones'];

const getDifferenceInFirstArray = (array1, array2) => {
  return array1.filter((obj1: any) => {
    return array2.filter((obj2: any) => {
      return matchingFields.some((field) => {
        const field1 = !Array.isArray(obj1[field]) ? [obj1[field]] : obj1[field];
        const field2 = !Array.isArray(obj2[field]) ? [obj2[field]] : obj2[field];
        if (!field1.length || !field2.length) {
          return false;
        }
        return field1.some((f) => field2.includes(f));
      });
    }).length === 0;
  });
};

export default (array1: [Contact], array2: [Contact]) => {
  return getDifferenceInFirstArray(array1, array2);
};
