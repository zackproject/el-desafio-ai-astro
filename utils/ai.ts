import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { env } from "../src/config";

const groq = createOpenAI({
    baseURL: env.BASE_URL,
    apiKey: env.API_KEY,
});

// https://sdk.vercel.ai/docs/foundations/prompts
export async function aiChatResponse(mPrompt: string, mSystem: string) {
    return await generateText({
        model: groq(env.MODEL),
        system: mPrompt,
        prompt: mSystem,
    });
}

