exports.handler = async (event, context) => {
  const data = {
    id: "184334839",
    hash: "20ee5b92de32469d0e3298179021866a",
    requestHash: "20ee5b92de32469d0e3298179021866a",
    profileUrl: "http://gravatar.com/urielcuriel",
    preferredUsername: "urielcuriel",
    thumbnailUrl:
      "https://secure.gravatar.com/avatar/20ee5b92de32469d0e3298179021866a",
    photos: [
      {
        value:
          "https://secure.gravatar.com/avatar/20ee5b92de32469d0e3298179021866a",
        type: "thumbnail",
      },
    ],
    name: {
      givenName: "Uriel",
      familyName: "Curiel",
      formatted: "Uriel Curiel",
    },
    displayName: "urielcuriel",
    urls: [],
  };
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    // // more keys you can return:
    // headers: { "headerName": "headerValue", ... },
    // isBase64Encoded: true,
  };
};
