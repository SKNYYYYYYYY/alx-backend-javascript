export default function handleResponseFromAPI(promise) {
  function handleResolution() {
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }
  function handleRejection() { return Error(); }
  return promise.then(handleResolution, handleRejection);
}
