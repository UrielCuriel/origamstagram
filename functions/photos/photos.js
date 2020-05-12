import Unsplash from "unsplash-js";

exports.handler = async (event, context) => {
  const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_KEY });
  try {
    const photos = await unsplash.search
      .photos("dogs", 1, 10, { orientation: "portrait" })
      .then((res) => res.json());
    return {
      statusCode: 200,
      body: JSON.stringify({ photos }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
