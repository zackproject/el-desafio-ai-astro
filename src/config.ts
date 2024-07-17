// config.ts
export const APIKEY = "API_KEY";
export const loc = {
    BASE_URL: "https://api.groq.com/openai/v1",
    MODEL: "llama3-8b-8192",
    API_KEY: window.localStorage.getItem(APIKEY)
}
