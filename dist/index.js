import { run } from "@xmtp/message-kit";
import { handler as agent } from "./handler/agent.js";
run(async (context) => {
    // Get the message and the address from the sender
    await agent(context);
});
//# sourceMappingURL=index.js.map