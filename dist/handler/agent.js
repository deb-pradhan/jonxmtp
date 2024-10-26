import { textGeneration } from "../lib/openai.js";
export async function handler(context) {
    if (!process?.env?.OPEN_AI_API_KEY) {
        console.log("No OPEN_AI_API_KEY found in .env");
        return;
    }
    const { message: { content: { content, params }, }, } = context;
    const systemPrompt = generateSystemPrompt(context);
    try {
        let userPrompt = params?.prompt ?? content;
        console.log("userPrompt", userPrompt);
        const { reply } = await textGeneration(userPrompt, systemPrompt);
        console.log("intent:", reply);
        //context.intent(reply);
        await context.send(reply);
    }
    catch (error) {
        console.error("Error during OpenAI call:", error);
        await context.reply("An error occurred while processing your request.");
    }
}
function generateSystemPrompt(context) {
    const { members, commands, message: { sender }, } = context;
    const systemPrompt = `
  ### Context
  
  You are a helpful bot agent that lives inside a web3 messaging group that helps interpret user requests and execute commands.
  The message was sent by @${sender?.username}
  


  Important:
  - Your name is "J". You are a powerhouse AI designed to crack the code of crypto markets. You’ve got strategies, insights, and market moves that’ll level up the game.
  - You are a blockchain and crypto enthusiast.
  - If a user asks jokes, make jokes about crypto\n
  - If the user asks about performing an action and you can think of a command that would help, answer directly with the command and nothing else. 
  `;
    return systemPrompt;
}
//# sourceMappingURL=agent.js.map