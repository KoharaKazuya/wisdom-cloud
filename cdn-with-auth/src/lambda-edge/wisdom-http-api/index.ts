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

  // check-auth で検証済みなので無条件で信頼する
  const claim = decodeToken(idToken!);
  CONFIG.logger.debug("Extracted claim:\n", claim);

  // origin request に wisdom-user-* ヘッダーを付与
  // ヘッダー値に Non-Ascii な文字は使えないのでパーセントエンコードする
  request.headers['wisdom-user-name'] = [{ value: encodeURI(claim.name) }];
  request.headers['wisdom-user-email'] = [{ value: encodeURI(claim.email) }];

  // リクエスト URI から `/api` プレフィクスを削除
  request.uri = request.uri.replace(/^\/api/, "");

  // Return the request unaltered to allow access to the resource:
  CONFIG.logger.debug("Returning request:\n", request);
  return request;
};
