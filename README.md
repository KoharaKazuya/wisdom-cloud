**構築手順**

1. <./cdn-with-auth/example-combinable-stacks/s3-bucket.yaml> を参考に、S3 Bucket を作成する
2. <./federated-identity> をデプロイする
3. <./cdn-with-auth> をデプロイする
4. <./cdn-with-auth/example-combinable-stacks/s3-bucket-policy.yaml> を参考に、CloudFront → S3 Bucket のアクセス許可をする
