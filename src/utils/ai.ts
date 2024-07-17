import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";
import { loc } from "config.ts";

const groq = createOpenAI({
    baseURL: loc.BASE_URL,
    apiKey: loc.API_KEY || "",
});

// https://sdk.vercel.ai/docs/foundations/prompts
export async function aiChatResponse(mPrompt: string, mSystem: string) {
    const result = await generateText({
        model: groq(loc.MODEL),
        system: mPrompt,
        prompt: mSystem,
    });
    return result.text;
}
