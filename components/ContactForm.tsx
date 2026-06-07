'use client';

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";

const contactInbox = "me@diego.dev.br";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "success">("idle");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("success");
        event.currentTarget.reset();
    }

    return (
        <section
            id="contact"
            className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]"
        >
            <div className="space-y-6">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-zinc-300">
                    Contato
                </span>

                <h2 className="max-w-lg text-4xl font-semibold tracking-tight text-white md:text-5xl">
                    Vamos conversar sobre arquitetura, performance e produto.
                </h2>

                <p className="max-w-xl text-base leading-8 text-zinc-300 md:text-lg">
                    Envie sua mensagem por aqui para iniciar a conversa sobre projetos,
                    consultoria ou oportunidades de colaboracao.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)]">
                        <Mail className="mb-4 h-5 w-5 text-[#f59e0b]" />
                        <p className="text-sm text-zinc-400">Inbox</p>
                        <p className="mt-2 text-sm font-medium text-white">{contactInbox}</p>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.85)]">
                        <MapPin className="mb-4 h-5 w-5 text-[#7dd3fc]" />
                        <p className="text-sm text-zinc-400">Base</p>
                        <p className="mt-2 text-sm font-medium text-white">Curitiba, Brasil</p>
                    </div>
                </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_32px_120px_-64px_rgba(0,0,0,0.95)] backdrop-blur md:p-8">
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid gap-5 md:grid-cols-2">
                        <label className="space-y-2">
                            <span className="text-sm text-zinc-300">Nome</span>
                            <input
                                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#7dd3fc] focus:bg-black/50"
                                name="name"
                                placeholder="Seu nome"
                                required
                                type="text"
                            />
                        </label>

                        <label className="space-y-2">
                            <span className="text-sm text-zinc-300">Email</span>
                            <input
                                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#f59e0b] focus:bg-black/50"
                                name="email"
                                placeholder="voce@empresa.com"
                                required
                                type="email"
                            />
                        </label>
                    </div>

                    <label className="space-y-2">
                        <span className="text-sm text-zinc-300">Assunto</span>
                        <input
                            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#7dd3fc] focus:bg-black/50"
                            name="subject"
                            placeholder="Descreva o contexto"
                            required
                            type="text"
                        />
                    </label>

                    <label className="space-y-2">
                        <span className="text-sm text-zinc-300">Mensagem</span>
                        <textarea
                            className="min-h-40 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-[#f59e0b] focus:bg-black/50"
                            name="message"
                            placeholder="Conte um pouco sobre o projeto, desafio ou oportunidade."
                            required
                        />
                    </label>

                    <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-1px] hover:bg-[#f6f6f6]"
                            type="submit"
                        >
                            Enviar mensagem
                            <Send className="h-4 w-4" />
                        </button>

                        <a
                            className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
                            href={`mailto:${contactInbox}`}
                        >
                            Abrir cliente de email
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                </form>

                {status === "success" && (
                    <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                        <p>
                            Mensagem enviada com sucesso. Retornarei pelo endereco informado
                            assim que possivel, ou voce pode escrever diretamente para{" "}
                            <span className="font-medium text-white">{contactInbox}</span>.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
