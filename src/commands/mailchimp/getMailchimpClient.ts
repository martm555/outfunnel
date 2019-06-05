const mailchimp = require('mailchimp-api-v3');
import {MAILCHIMP_API_TOKEN} from '../../utils/config';

let client;

export default () => {
  if (!client) {
    client = new mailchimp(MAILCHIMP_API_TOKEN);
  }
  return client;
};
