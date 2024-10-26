export declare function textGeneration(userPrompt: string, systemPrompt: string): Promise<{
    reply: string;
    history: {
        role: string;
        content: string;
    }[];
}>;
export declare function vision(imageData: Uint8Array, systemPrompt: string): Promise<string | null>;
//# sourceMappingURL=openai.d.ts.map