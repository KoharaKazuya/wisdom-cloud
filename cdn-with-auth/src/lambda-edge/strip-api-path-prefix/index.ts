import { CloudFrontRequestHandler } from 'aws-lambda';

export const handler: CloudFrontRequestHandler = async (event) => {
  try {
    const request = event.Records[0].cf.request;

    // strip `/api` prefix
    request.uri = request.uri.replace(/^\/api/, "");

    return request;
  } catch (err) {
    console.log(err);
    return err;
  }
}
