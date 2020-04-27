const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: 'mongodb://127.0.0.1:27017/mydatabase',
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log('Error', err);
  });
