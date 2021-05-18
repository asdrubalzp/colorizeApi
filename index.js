const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

const filepath = `${__dirname}/images/test4.jpg`;

const img = fs.readFileSync(filepath);

const APIKEY = '';

const form = new FormData();
form.append('image', img, {
  filename: 'img.jpg',
});
form.append('renderFactor', 25);

const headers = {
  'content-type': `multipart/form-data; boundary=${form.getBoundary()}`,
  'x-rapidapi-key': APIKEY,
  'x-rapidapi-host': 'ai-picture-colorizer.p.rapidapi.com',
};

(async () => {
  try {
    const response = await axios
      .create({
        headers: headers,
        responseType: 'stream',
      })
      .post(
        'https://ai-picture-colorizer.p.rapidapi.com/colorize-api-bin-mjbcrab',
        form
      );

    console.log('Response status: ', response.status);
  } catch (error) {
    console.error('Error getting the colorize img ', error);
  }
})();
