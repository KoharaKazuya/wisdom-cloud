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
- Lambda@Edge を含むため **us-east-1 にデプロイしてください**
- デプロイ後、CloudFormation Outputs の CloudFront Origin Access Identity から S3 Bucket Policy に設定が必要です
