import Nylas from "nylas";

exports.handler = async function (event) {
  const nylas = new Nylas({
    apiKey:
      // MAKE NEW KEY at https://dashboard-v3.nylas.com/applications/c64cea3f-2800-4c38-af37-0f918882cda4/api-keys
      "nyk_v0_Wf44qez7mNNeL9lI59JLziAZyYKGX1WP5kqE4CWN14Cib8qBiobLju3GGC4CStsn",
  });

  const authUrl = nylas.urlForOAuth2({
    redirectURI: event.queryStringParameters.redirectURI,
    clientId: "c64cea3f-2800-4c38-af37-0f918882cda4",
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ authUrl }),
  };
};
