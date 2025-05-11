## Todo

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


## Packages

| Package                        | Version    |
|-------------------------------|------------|
| @radix-ui/react-slot          | ^1.2.0     |
| @vidstack/react               | ^1.12.13   |
| axios                         | ^1.9.0     |
| better-auth                   | ^1.2.7     |
| better-sqlite3                | ^11.9.1    |
| class-variance-authority      | ^0.7.1     |
| clsx                          | ^2.1.1     |
| dodopayments                  | ^1.18.3    |
| drizzle-orm                   | 0.43.1     |
| framer-motion                 | ^12.9.2    |
| hls.js                        | ^1.6.2     |
| lucide-react                  | ^0.503.0   |
| next                          | 15.3.0     |
| pg                            | ^8.15.6    |
| primereact                    | ^10.9.5    |
| react                         | 19.1.0     |
| react-dom                     | 19.1.0     |
| resend                        | ^4.4.1     |
| tailwind-merge                | ^3.2.0     |


## Docker

1. Run application in docker: This will use `Dockerfile` and build it.

```bash
sudo docker-compose up --build
```