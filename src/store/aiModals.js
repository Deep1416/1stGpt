import models1 from "/gallery/gpt.jpeg";
import models2 from "/gallery/llamba.jpeg";
import models3 from "/gallery/gemini.jpeg";

const aiModals = [
  {
    id: 1,
    img: models1,
    title: "Gpt-4 omi",
    disc: "GPT, or Generative Pre-trained Transformer, is an advanced AI language model developed by OpenAI. It uses deep learning techniques to generate human-like text based on input prompts. Trained on vast amounts of data, GPT can understand context, answer questions, write essays, create code, and even engage in conversations. Its versatility makes it a powerful tool for various applications, from content creation to customer support. However, it can sometimes produce inaccurate or biased information, as it relies on patterns in the data it was trained on. GPT's continual improvements aim to enhance its accuracy and usefulness",
  },
  {
    id: 2,
    img: models2,
    title: "Groq Llama3 70B",
    disc: `LLaMA 3, short for "Large Language Model Meta AI," is a powerful AI language model developed by Meta (formerly Facebook). Building on the advancements of its predecessors, LLaMA 3 offers significant improvements in text generation, understanding, and contextual responses. It's designed to be more efficient, requiring less computational power while delivering high-quality outputs. LLaMA 3 can perform various tasks, including content creation, coding assistance, and more. Its architecture is optimized to handle complex language tasks, making it a competitive alternative to other leading models like GPT.`,
  },
  {
    id: 3,
    img: models3,
    title: "Google gemini",
    disc: "GPT-3.5 is an advanced AI language model by OpenAI, improving on GPT-3 with enhanced accuracy and contextual understanding. It generates human-like text, supports various applications like writing, coding, and conversation, and offers more refined responses while maintaining versatility across diverse tasks.",
  },
  {
    id: 4,
    img: models1,
    title: "gpt 3.5",
    disc: "Google Gemini is an AI language model developed by Google, part of their efforts to advance natural language processing and AI capabilities. Gemini is designed to compete with models like GPT, offering powerful text generation, understanding, and contextual analysis. It aims to enhance various applications, from search to AI-driven content creation, with improved efficiency and accuracy.",
  }
];

export default aiModals;
