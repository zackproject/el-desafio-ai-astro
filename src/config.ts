// config.ts
import { env } from "../env.ts" // import.meta.env & process.env not work here
export const loc = {
    BASE_URL: "https://api.groq.com/openai/v1",
    MODEL: "llama3-8b-8192",
    API_KEY: env.API_KEY
}
