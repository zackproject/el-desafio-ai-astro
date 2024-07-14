import 'dotenv/config'
export const env = {
    BASE_URL: "https://api.groq.com/openai/v1",
    MODEL: "llama3-8b-8192",
    API_KEY: process.env.API_KEY
}