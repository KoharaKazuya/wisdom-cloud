**構築手順**

1. <./cdn-with-auth/example-combinable-stacks/s3-bucket.yaml> を参考に、S3 Bucket を作成する
2. <./cdn-with-auth/example-combinable-stacks/cognito-userpool.yaml> を参考に、Cognito UserPool を作成する
3. <./cdn-with-auth> をデプロイする
4. <./cdn-with-auth/example-combinable-stacks/s3-bucket-policy.yaml> を参考に、CloudFront → S3 Bucket のアクセス許可をする
5. <https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/cognito-user-pools-social-idp.html> を参考に、ソーシャルログインを有効化する
