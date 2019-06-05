import getMailchimpClient from './getMailchimpClient';

export default (audienceId: string) => {
  // TODO: missing timeout parameter
  return getMailchimpClient().get({
    path : `/lists/${audienceId}/members`,
  });
};
