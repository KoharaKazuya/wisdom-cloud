// ../check-auth を元に作成

import { CloudFrontRequestHandler } from "aws-lambda";
import {
  decodeToken,
  extractAndParseCookies,
  getCompleteConfig
} from "../shared/shared";

let CONFIG: ReturnType<typeof getCompleteConfig>;

export const handler: CloudFrontRequestHandler = async (event) => {
  if (!CONFIG) {
    CONFIG = getCompleteConfig();
    CONFIG.logger.debug("Configuration loaded:", CONFIG);
  }
  CONFIG.logger.debug("Event:", event);
  const request = event.Records[0].cf.request;

  const { idToken } = extractAndParseCookies(
    request.headers,
    CONFIG.clientId,
    CONFIG.cookieCompatibility
  );
  CONFIG.logger.debug("Extracted cookies:\n", { idToken });

  // If there's no ID token in your cookies then you are not signed in yet
  if (!idToken) {
    throw new Error("No ID token present in cookies");
  }

  // origin request に wisdom-authed-email ヘッダーを付与
  const { email } = decodeToken(idToken);
  request.headers["wisdom-authed-email"] = [{ value: email }];

  // リクエスト URI から `/api` プレフィクスを削除
  request.uri = request.uri.replace(/^\/api/, "");

  // Return the request unaltered to allow access to the resource:
  CONFIG.logger.debug("Returning request:\n", request);
  return request;
};
