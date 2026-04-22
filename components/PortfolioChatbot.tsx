"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaRobot, FaXmark } from "react-icons/fa6";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

type ApiMessage = {
  role: ChatRole;
  content: string;
};

type PortfolioChatbotProps = {
  title?: string;
  className?: string;
  endpoint?: string;
};

const quickPrompts = [
  "What's Bryan's current role?",
  "What is his tech stack?",
  "Tell me about his recent experience",
  "How can I contact Bryan?",
];

const createMessage = (role: ChatRole, content: string): ChatMessage => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
  role,
  content,
});

const PortfolioChatbot = ({
  title = "Ask about Bryan",
  className = "",
  endpoint = "/api/chat",
}: PortfolioChatbotProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    createMessage(
      "assistant",
      "Hi, I'm Bryan's portfolio assistant. Ask me about his skills, projects, experience, or how to contact him."
    ),
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  const canSend = useMemo(
    () => !isLoading && input.trim().length > 0,
    [isLoading, input]
  );

  const sendMessage = async (customMessage?: string) => {
    const trimmed = (customMessage ?? input).trim();
    if (!trimmed || isLoading) {
      return;
    }

    const userMessage = createMessage("user", trimmed);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const payload: { messages: ApiMessage[] } = {
        messages: nextMessages.map(({ role, content }) => ({ role, content })),
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok || !data.message) {
        throw new Error(data.error ?? "Unable to get a reply right now.");
      }

      setMessages((prev) => [...prev, createMessage("assistant", data.message as string)]);
    } catch (requestError) {
      const message =
        requestError instanceof Error
          ? requestError.message
          : "Something went wrong while sending your message.";

      setError(message);
      setMessages((prev) => [
        ...prev,
        createMessage(
          "assistant",
          "I cannot respond right now. Please try again in a moment or email Bryan directly at paladbryanj@gmail.com."
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendMessage(input);
  };

  return (
    <>
      {isOpen ? (
        <section
          className={`fixed bottom-4 right-4 z-50 flex h-[min(78vh,640px)] w-[min(94vw,420px)] flex-col rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_25px_80px_-28px_rgba(2,6,23,0.5)] dark:border-white/10 dark:bg-[#0d1524] md:bottom-6 md:right-6 ${className}`}
          aria-label="Portfolio chatbot"
        >
          <div className="mb-2 flex items-center justify-between rounded-2xl border border-sky-200 bg-[linear-gradient(130deg,#ebf5ff_0%,#d9ecff_55%,#cae3ff_100%)] px-3 py-2 dark:border-cyan-300/20 dark:bg-[linear-gradient(130deg,#12233c_0%,#0f1f37_55%,#12304d_100%)]">
            <div className="flex items-center gap-3">
              <div className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white shadow-[0_10px_20px_-8px_rgba(2,132,199,0.9)]">
                <FaRobot className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-[#0f1728]" />
              </div>
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                  {title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-300">
                  Portfolio Assistant • Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-white/80 text-sky-700 transition hover:bg-white dark:border-cyan-300/30 dark:bg-white/10 dark:text-cyan-200 dark:hover:bg-white/20"
            >
              <FaXmark className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto rounded-2xl border border-slate-200 bg-[radial-gradient(circle_at_20%_0%,#f8fbff_0%,#f1f5f9_45%,#eef2f7_100%)] p-3 dark:border-white/10 dark:bg-[radial-gradient(circle_at_20%_0%,#16243b_0%,#0f1728_45%,#0b1220_100%)]">
            {messages.map((message) => {
              const isUser = message.role === "user";

              return (
                <div
                  key={message.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      isUser
                        ? "rounded-br-md bg-sky-600 text-white"
                        : "rounded-bl-md border border-slate-200 bg-white text-slate-800 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-100"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              );
            })}

            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
                  Thinking...
                </div>
              </div>
            ) : null}

            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    void sendMessage(prompt);
                  }}
                  className="shrink-0 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-medium text-sky-700 transition hover:border-sky-300 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-cyan-300/30 dark:bg-cyan-300/10 dark:text-cyan-200 dark:hover:bg-cyan-300/20"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <label htmlFor="portfolio-chat-input" className="sr-only">
              Ask a question about Bryan
            </label>
            <div className="flex items-center gap-2 rounded-2xl border border-slate-300 bg-white p-2 dark:border-white/15 dark:bg-[#0f1728]">
              <input
                id="portfolio-chat-input"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about skills, projects, or contact info"
                className="h-11 flex-1 rounded-xl border-0 bg-transparent px-2 text-sm text-slate-900 outline-none dark:text-slate-100"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-slate-400 dark:bg-cyan-300 dark:text-slate-900 dark:hover:bg-cyan-200 dark:disabled:bg-slate-600 dark:disabled:text-slate-300"
              >
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </div>

            {error ? (
              <p className="px-1 text-xs text-rose-600 dark:text-rose-300">{error}</p>
            ) : null}
          </form>
        </section>
      ) : null}

      {!isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-[0_18px_36px_-14px_rgba(2,132,199,0.9)] transition hover:scale-105 hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 dark:bg-cyan-300 dark:text-slate-900 dark:hover:bg-cyan-200 md:bottom-6 md:right-6"
        >
          <FaComments className="h-5 w-5" />
        </button>
      ) : null}
    </>
  );
};

export default PortfolioChatbot;
