# PictureDisplayService

## Scripts
npm install
npm run build
npm run start
npm run seeddb

## API

- GET /api/pictures/:hotel
  - Returns picture info array with hotel ID
- POST /api/createItem
  - Creates a new hotel's picture list in the database.
- PATCH api/updateItem/:hotel
  - Update a hotel's picture with new data.
- DELETE api/pictures/:hotel
  - Delete a hotel from the database with hotel ID
