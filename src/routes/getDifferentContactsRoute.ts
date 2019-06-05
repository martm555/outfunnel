
import {RouteMethods} from '../types';
import asyncHandler from './asyncHandler';

import getDifferentContacts from '../commands/getDifferentContacts';
import getMailchimpContact from '../commands/mailchimp/getMailchimpContact';
import getMailchimpContacts from '../commands/mailchimp/getMailchimpContacts';
import getPipedriveContact from '../commands/pipedrive/getPipedriveContact';
import getPipedriveContacts from '../commands/pipedrive/getPipedriveContacts';
import {MAILCHIMP_AUDIENCE_ID} from '../utils/config';

export const getDifferentContactsRoute = {
  method: RouteMethods.GET,
  middlewares: [
    asyncHandler(async (req, res, next) => {
      const contacts: any = await Promise.all([getMailchimpContacts(MAILCHIMP_AUDIENCE_ID), getPipedriveContacts()]);
      const [mailchimpContacts, pipedriveContacts] = contacts;

      const mailchimpContactArray = getMailchimpContact(mailchimpContacts.members);
      const pipedriveContactArray = getPipedriveContact(pipedriveContacts);

      const contactsInMailchimpButNotInPipedrive = getDifferentContacts(mailchimpContactArray, pipedriveContactArray);
      const contactsInPipedriveButNotInMailchimp = getDifferentContacts(pipedriveContactArray, mailchimpContactArray);

      return res.status(200).json({
        contactsInMailchimpButNotInPipedrive,
        contactsInPipedriveButNotInMailchimp,
      });
    }),
  ],
  name: '/getDifferentContacts',
};
