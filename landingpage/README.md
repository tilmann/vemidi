# Landingpage

## Deploy

`aws s3 sync ./landingpage s3://vemidi.twix.dev/ --acl public-read`
`aws cloudfront create-invalidation --distribution-id E1FUKNJ6A2GHQS --paths "/index.html" "/imprint.html"`
