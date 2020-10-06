# cdn-with-auth

アクセスのために認証を必要とする CDN。

CDN エッジで認証チェックをし、認証情報は JWT on Cookies で管理する。

AWS CloudFront + Lambda@Edge + Cognito の構成。
参考: <https://aws.amazon.com/jp/blogs/networking-and-content-delivery/authorizationedge-using-cookies-protect-your-amazon-cloudfront-content-from-being-downloaded-by-unauthenticated-users/>

このディレクトリは
<https://github.com/aws-samples/cloudfront-authorization-at-edge/tree/4ea3bc8fe96700705bd9886462ebd072912bcf98>
をクローンに変更を加えたもの。

## 注意

- 事前に Cognito UserPool, Cognito UserPool Client, S3 Bucket の作成が必要です (リージョンは任意)
- 指定した Cognito UserPool Client には cdn-with-auth で使用するコールバック URL が登録されます
- Lambda@Edge を含むため **us-east-1 にデプロイしてください**
- デプロイ後、CloudFormation Outputs の CloudFront Origin Access Identity から S3 Bucket Policy に設定が必要です

## デプロイ方法

**前提**

1. [Node.js](https://nodejs.org/en/download/) のダウンロードとインストール
2. [AWS SAM CLI](https://github.com/awslabs/aws-sam-cli) のダウンロードとインストール
3. AWS アカウントとその中にリソースを作るのに必要な権限
4. SAM デプロイのために使う S3 Bucket
5. Unix ライクなシェル (Windows は Linux Subsystem for Windows か Cygwin など)

**デプロイ**

1. このリポジトリのクローン
2. 依存のインストール `npm install`
3. TypeScript のコンパイルと Webpack の実行 `npm run build`
4. SAM build の実行 `sam build --use-container`
5. SAM deploy の実行 `sam deploy`
