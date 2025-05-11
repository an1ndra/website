### TODO

- [ ] Implement Drizzle (Postgresql) for auth.
- [ ] Use drizzle to get the users value for payment method and verify details.
- [ ] Improve video page.
- [ ] Improve payment method (dodopayments or polar).
- [ ] Use cloudflare R2 database for videos.
    - [ ] Use s3 bucket type storage for video and images.
    - [ ] Use bun S3 bucket API insted of using external API.
- [ ] Improved UI/UX.
- [ ] Use SpringBoot3 API to store user data.
- [ ] Use velkery(Redis alternative) to track user progress,
- [ ] Create admin bashboard for admin users.
- [ ] Implement Google Analytics API in admin bashboard.
- [ ] Host in Hetzner server

## Docker

1. Run application in docker:
This will use `Dockerfile` and build it.

```bash
sudo docker-compose up --build
```