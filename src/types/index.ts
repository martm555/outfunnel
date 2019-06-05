export enum RouteMethods {
  GET = 'GET',
}

export interface Contact {
  fullName: string;
  phones: [string];
  emails: [string];
}
