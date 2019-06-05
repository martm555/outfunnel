import * as pipedrive from 'pipedrive';
import {PIPEDRIVE_API_TOKEN} from '../../utils/config';

let client;

export default () => {
  if (!client) {
    client = new pipedrive.Client(PIPEDRIVE_API_TOKEN, { strictMode: true });
  }
  return client;
};
