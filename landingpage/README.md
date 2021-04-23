# Landingpage

## Deploy

`aws s3 sync ./landingpage s3://vemidi.de/ --acl public-read`
`aws cloudfront create-invalidation --distribution-id E27TUGUWCZWE5X --paths "/index.html" "/imprint.html"`
