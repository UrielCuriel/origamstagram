const { photos, comments } = require("../constant");

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function random(min, max) {
  return Math.floor(Math.random() * max + min);
}

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      photos: shuffle(photos)
        .slice(0, 5)
        .map((photo) => {
          photo.comments = shuffle(comments).slice(0, random(1, 5));
          return photo;
        }),
    }),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  };
};
