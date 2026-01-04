import { GoogleGenAI } from "@google/genai";
import { BIO, ACADEMIC_PUBLICATIONS } from "../constants.ts";

export const getAIResponse = async (userInput: string) => {
  if (!process.env.API_KEY) {
    return "API Key not configured. Please check your environment.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const context = `
      You are the Virtual Assistant of Alexandre Trocado, a Researcher in Mathematics and Photographer.
      Context: ${BIO}
      Key Publications: ${ACADEMIC_PUBLICATIONS.slice(0, 3).map(p => p.title).join(', ')}.
      ALWAYS respond in English.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userInput,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant is temporarily unavailable.";
  }
};