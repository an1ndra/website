// TODO: Instead of using sqlite use Postgres(Neon)
import { betterAuth } from "better-auth";
import { Resend } from "resend";
import { haveIBeenPwned } from "better-auth/plugins";
import { Pool } from "pg";
import { jwt } from "better-auth/plugins";
// import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { db } from "@/db"; // your drizzle instance

export const resend = new Resend("re_FAv8Qpn2_EFBrrHUZ1xnjhh2MTtThKDGL");
console.log(resend);

console.log("-----------BETTER AUTH SQL Execution Started--------------");
export const auth = betterAuth({
  plugins: [
    jwt(),
    haveIBeenPwned({
      customPasswordCompromisedMessage: "Please choose a more secure password.",
    }),
    // captcha({
    //   provider: "cloudflare-turnstile", // or google-recaptcha, hcaptcha
    //   secretKey: process.env.TURNSTILE_SECRET_KEY!,
    // }),
  ],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  rateLimit: {
    enabled: true,
    window: 10, // time window in seconds
    max: 10, // max requests in the window
    storage: "database",
    modelName: "rateLimit", //optional by default "rateLimit" is used
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true, //defaults to true
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({
      user,
      url,
    }: {
      user: { email: string };
      url: string;
    }) => {
      await resend.emails.send({
        from: "S1Coder Verification <no-reply@mail.s1coder.dev>", // You could add your custom domain
        to: [user.email], // email of the user to want to end
        subject: "Confirm your email address", // Main subject of the email
        html: `<b>Activation Link:</b> <a href="${url}">${url}</a>`, // Content of the email
      });
    },
  },
  database: new Pool({
    connectionString: process.env.PG_DATABASE_URL,
  }),
  // database: drizzleAdapter(db, {
  //   provider: "pg", // or "mysql", "sqlite"
  // }),
});
