const COOKIE_CONSENT_COUNTRIES = [
  "AT",
  "BE",
  "BG",
  "CY",
  "CZ",
  "DE",
  "DK",
  "DK",
  "EE",
  "EL",
  "ES",
  "EU",
  "FI",
  "FR",
  "FR",
  "GB",
  "GR",
  "HR",
  "HU",
  "IE",
  "IT",
  "IT",
  "LT",
  "LU",
  "LV",
  "MT",
  "NL",
  "PL",
  "PT",
  "SE",
  "SK",
  "UK"
];

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const country = request.headers.get("cf-ipcountry");

  let status = 'no-need';
  if (COOKIE_CONSENT_COUNTRIES.includes(country) || searchParams.get("force") === "true") {
    status = 'require';
  }

  return new Response(JSON.stringify({
    'status': status,
  }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/javascript"
    }
  });
}
