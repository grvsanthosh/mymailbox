# mymailbox application

An mymailbox application built with Vite, React.js for the frontend, and Node.js, Express, and MongoDB for the backend.

## Features

- SMTP integration.
- MUI framework for styling.
- Able to Perform operations - starred, compose mail, save draft while closing compose mail, move mails to bin, & permanently remove from bin.
- Axios for API request.
- React router dom for app routes.

### Product Routes

- **POST** `/save` - Save sent mail
- **POST** `/save-drafts` - Save draft mail
- **POST** `/bin` - Move mail to bin
- **POST** `/starred` - Star mails
- **GET** `/emails/:type` - Fetch mails 
- **DELETE** `/delete` - Delete mail permanently