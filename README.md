## Service workeк for the CloudeFlare to return if a user must apply cookie consent.

### Step 1.
Create a new service worked on CloudFlare and deploy this code.

### Step 2.

Use the following code, replace ENPOINT_URL_OF_THE_SERVICE_WORKER with the URL of the endpoint.

```
checkRequirements()
  .then((response) => response.json())
  .then((data) => {
    if (!data.status || data.status === 'no-need') {
      // Skip, or do something.
    }

    // Do something.
  });

/**
 * Check if cookie consent banner needs to be displayed.
 *
 * @returns {Promise<Response>}
 */
async function checkRequirements() {
  const force = false;
  const endpoint = ENPOINT_URL_OF_THE_SERVICE_WORKER;
  return fetch(`${endpoint}?force=${force}`);
}
```
