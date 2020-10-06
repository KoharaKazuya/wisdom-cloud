# cdn-with-auth

アクセスのために認証を必要とする CDN。

CDN エッジで認証チェックをし、認証情報は JWT on Cookies で管理する。

AWS CloudFront + Lambda@Edge + Cognito の構成。
参考: <https://aws.amazon.com/jp/blogs/networking-and-content-delivery/authorizationedge-using-cookies-protect-your-amazon-cloudfront-content-from-being-downloaded-by-unauthenticated-users/>

このディレクトリは
<https://github.com/aws-samples/cloudfront-authorization-at-edge/tree/4ea3bc8fe96700705bd9886462ebd072912bcf98>
をクローンに変更を加えたもの。
