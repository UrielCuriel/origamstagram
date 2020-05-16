const { photos } = require("../constant");

function getUnique(arr, comp) {
  const unique = arr
    .map((e) => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => arr[e])
    .map((e) => arr[e]);
  return unique;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

exports.handler = async (event, context) => {
  const stories = getUnique(
    shuffle(photos.map((photo) => photo.user)).slice(0, 5),
    "id"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ stories }),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  };
};
