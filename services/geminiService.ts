
import { GoogleGenAI } from "@google/genai";
import { BIO, ACADEMIC_PUBLICATIONS } from "../constants.ts";

export const getAIResponse = async (userInput: string) => {
  // Fix: Initialize GoogleGenAI using the mandatory named parameter with direct process.env.API_KEY access
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Basic Text Task: Use gemini-3-flash-preview as per guidelines
    const model = 'gemini-3-flash-preview';
    
    const context = `
      You are the Virtual Assistant of Alexandre Trocado. 
      Alexandre has a unique dual profile: Researcher/Mathematics Teacher and Artistic Photographer.
      ALWAYS respond in English.
      
      Academic Context:
      - Specialist in Computational Algebra and Computational Thinking.
      - Published in prestigious journals such as Axioms and Journal of Computational and Applied Mathematics.
      - Author of the iMat12 collection (Mathematics A high school manuals).
      - Collaborates with international institutions like Johannes Kepler University Linz.
      
      List of Recent Publications:
      ${ACADEMIC_PUBLICATIONS.slice(0, 5).map(p => `- ${p.title} (${p.year})`).join('\n')}

      Biographical Profile and Photography:
      ${BIO}
      
      Response Guidelines:
      1. If asked about publications, refer to his work in Algebra and the iMat12 school manuals.
      2. If asked about his profile, highlight the connection between Mathematics and Photography.
      3. Maintain the balance between the scientist and the artist.
    `;

    // Fix: Use generateContent with model and contents as specified in the SDK guidelines, passing instructions in the config
    const response = await ai.models.generateContent({
      model: model,
      contents: userInput,
      config: {
        systemInstruction: context,
        temperature: 0.7,
      },
    });

    // Fix: Access the text property directly on the GenerateContentResponse object
    return response.text || "I'm sorry, I couldn't process your request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is under maintenance. Please try again later.";
  }
};
