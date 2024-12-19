const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const targetUrl = "http://tv.dugdugilive.com:8080/0ne$ky23/sonyten3/index.m3u8";

  try {
    const response = await fetch(targetUrl);
    const body = await response.text();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Access-Control-Allow-Origin": "*",
      },
      body: body,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Error fetching the stream",
    };
  }
};
