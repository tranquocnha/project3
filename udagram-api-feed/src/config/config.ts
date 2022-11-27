export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key_id: "ASIA3LV35GSQJJLK75D2",
  aws_secret_access_key: "jzZqtwwfQx1sHwvc5XtyQVuEdc7unM+gYpLsWHXX",
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
