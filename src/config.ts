// config.ts
export const APIKEY = "api-key";
export const loc = {
    BASE_URL: "https://api.groq.com/openai/v1",
    MODEL: "llama3-8b-8192",
    API_KEY: window.localStorage.getItem(APIKEY)
}
