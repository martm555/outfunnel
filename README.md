## Documentation

This is AP for getting differences between Pipedrive and Mailchimp contacts.

## Development

In project root run the following commands.

Copy env file

`cp .env-example .env`

Fill environment file with your own data

Install packages

`yarn install`

Run application

`yarn start`

Forecast API is now available in `http://localhost:3000` (be sure that port 3000 is available in your local machine)

Run linter

`yarn lint`

## API

API has following endpoints.

* `/getDifferentContacts` - get different contacts which are present in Mailchimp and not in Pipedrive and vice versa.
