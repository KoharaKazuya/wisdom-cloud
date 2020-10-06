このディレクトリには [cdn-with-auth](../template.yaml) と組み合わせて構築する例となる CloudFormation Template を保管する。

- `cognito-userpool.yaml`: ウェブサイトのユーザー管理基盤。cdn-with-auth スタックより事前に使用する
- `s3-bucket.yaml`: ウェブサイトのオリジンとなる S3 Bucket。cdn-with-auth スタックより事前に使用する
- `s3-bucket-policy.yaml`: CloudFront が S3 Bucket にアクセスできるように OAI を設定するためのテンプレート。cdn-with-auth スタックの作成後に使用する
