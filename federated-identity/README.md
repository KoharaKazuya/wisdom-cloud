## 注意

事前に [ユーザープールへのソーシャル ID プロバイダーの追加 - Amazon Cognito](https://docs.aws.amazon.com/ja_jp/cognito/latest/developerguide/cognito-user-pools-social-idp.html) などを参考に、[Google Developers Console](https://console.developers.google.com/) から OAuth2.0 クライアント (= Google の ID を利用するアプリケーション = この Cognito User Pool Hosted UI) を登録する必要があります。登録後に得られるクライアント ID およびクライアントシークレットを CloudFormation スタックパラメーターとして使用します。
ただし、OAuth2.0 クライアントの設定値であるオリジンはコールバック URL は CloudFormation スタックがデプロイされてから得られるため、事前にダミーを設定し、デプロイ後に正しい値を設定する必要があります。
