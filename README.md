## Service worked for the CloudeFlare to return if user must apply cookie consent.

### Step 1.
Create new service worked on CloudFlare and deploy this code.

### Step 2.

Use following code, replace ENPOINT_URL_OF_THE_SERVICE_WORKER with URL of the endpoint.

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
 * Check if cookie consent banner need to be displayed.
 *
 * @returns {Promise<Response>}
 */
async function checkRequirements() {
  const force = false;
  const endpoint = ENPOINT_URL_OF_THE_SERVICE_WORKER;
  return fetch(`${endpoint}?force=${force}`);
}
```
