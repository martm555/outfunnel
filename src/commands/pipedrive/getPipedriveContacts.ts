import getPipedriveClient from './getPipedriveClient';

export default () => {
  return new Promise((resolve, reject) => {
    getPipedriveClient().Persons.getAll({}, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
