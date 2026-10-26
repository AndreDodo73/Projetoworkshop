import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { AdminLayout } from "../components/AdminLayout";
import { AdminPage } from "../components/admin-ui";
import { Field, GhostButton, PrimaryButton, TextInput } from "../components/fields";
import { formatBRL } from "../domain/finance";
import { useAcademy } from "../domain/store";
import type { ConfiguracaoAcademia } from "../domain/types";

const tabs = ["Geral", "Planos", "Perfil", "Sistema"] as const;

export function Configuracoes() {
  const { state, user, updateConfig, updatePerfil, changeSenha, addPlano, updatePlano } = useAcademy();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Geral");

  return (
    <AdminLayout>
      <AdminPage title="Configurações">
        <div className="mb-8 flex w-full flex-wrap gap-2">
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTab(item)}
              className="min-h-11 px-4"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: tab === item ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                background: tab === item ? "var(--color-primary)" : "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-subtle)",
              }}
            >
              {item}
            </button>
          ))}
        </div>
        {tab === "Geral" ? <TabGeral config={state.config} onSave={updateConfig} /> : null}
        {tab === "Planos" ? <TabPlanos planos={state.planos} onToggle={(id, destaque) => updatePlano(id, { destaque })} onCreate={addPlano} /> : null}
        {tab === "Perfil" && user ? (
          <TabPerfil
            nome={user.nome}
            email={user.email}
            telefone={user.telefone}
            onSave={updatePerfil}
            onSenha={changeSenha}
          />
        ) : null}
        {tab === "Sistema" ? <TabSistema config={state.config} onSave={updateConfig} /> : null}
      </AdminPage>
    </AdminLayout>
  );
}

function TabGeral({ config, onSave }: { config: ConfiguracaoAcademia; onSave: (patch: Partial<ConfiguracaoAcademia>) => void }) {
  const [form, setForm] = useState(config);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSave(form);
    toast.success("Dados da academia salvos");
  };
  const set = (key: keyof ConfiguracaoAcademia) => (event: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  return (
    <form onSubmit={submit} className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <Field label="Nome da academia"><TextInput value={form.nome} onChange={set("nome")} /></Field>
      <Field label="CNPJ"><TextInput value={form.cnpj} onChange={set("cnpj")} /></Field>
      <Field label="Telefone"><TextInput value={form.telefone} onChange={set("telefone")} /></Field>
      <Field label="E-mail"><TextInput type="email" value={form.email} onChange={set("email")} /></Field>
      <Field label="Endereço"><TextInput value={form.endereco} onChange={set("endereco")} /></Field>
      <Field label="Cidade"><TextInput value={form.cidade} onChange={set("cidade")} /></Field>
      <Field label="Estado"><TextInput value={form.estado} onChange={set("estado")} /></Field>
      <Field label="CEP"><TextInput value={form.cep} onChange={set("cep")} /></Field>
      <div className="md:col-span-2"><PrimaryButton type="submit">Salvar</PrimaryButton></div>
    </form>
  );
}

function TabSistema({ config, onSave }: { config: ConfiguracaoAcademia; onSave: (patch: Partial<ConfiguracaoAcademia>) => void }) {
  const [form, setForm] = useState(config);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onSave({
      horarioAbertura: form.horarioAbertura,
      horarioFechamento: form.horarioFechamento,
      diasSemCheckinRisco: Number(form.diasSemCheckinRisco),
      diasAlertaVencimento: Number(form.diasAlertaVencimento),
      pinRecepcao: form.pinRecepcao,
    });
    toast.success("Sistema atualizado");
  };

  return (
    <form onSubmit={submit} className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
      <Field label="Abertura"><TextInput type="time" value={form.horarioAbertura} onChange={(event) => setForm((prev) => ({ ...prev, horarioAbertura: event.target.value }))} /></Field>
      <Field label="Fechamento"><TextInput type="time" value={form.horarioFechamento} onChange={(event) => setForm((prev) => ({ ...prev, horarioFechamento: event.target.value }))} /></Field>
      <Field label="Dias sem check-in para risco"><TextInput type="number" min={1} value={form.diasSemCheckinRisco} onChange={(event) => setForm((prev) => ({ ...prev, diasSemCheckinRisco: Number(event.target.value) }))} /></Field>
      <Field label="Dias antes do vencimento para alertar"><TextInput type="number" min={1} value={form.diasAlertaVencimento} onChange={(event) => setForm((prev) => ({ ...prev, diasAlertaVencimento: Number(event.target.value) }))} /></Field>
      <Field label="PIN da recepção"><TextInput value={form.pinRecepcao} maxLength={4} onChange={(event) => setForm((prev) => ({ ...prev, pinRecepcao: event.target.value }))} /></Field>
      <div className="md:col-span-2"><PrimaryButton type="submit">Salvar</PrimaryButton></div>
    </form>
  );
}

function TabPerfil({
  nome,
  email,
  telefone,
  onSave,
  onSenha,
}: {
  nome: string;
  email: string;
  telefone: string;
  onSave: (patch: { nome: string; email: string; telefone: string }) => void;
  onSenha: (atual: string, nova: string) => boolean;
}) {
  const [form, setForm] = useState({ nome, email, telefone });
  const [atual, setAtual] = useState("");
  const [nova, setNova] = useState("");
  const [erro, setErro] = useState("");

  return (
    <div className="flex w-full flex-col gap-10">
      <form
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          onSave(form);
          toast.success("Perfil salvo");
        }}
      >
        <Field label="Nome completo"><TextInput value={form.nome} onChange={(event) => setForm((prev) => ({ ...prev, nome: event.target.value }))} /></Field>
        <Field label="E-mail"><TextInput type="email" value={form.email} onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))} /></Field>
        <Field label="Telefone"><TextInput value={form.telefone} onChange={(event) => setForm((prev) => ({ ...prev, telefone: event.target.value }))} /></Field>
        <div className="md:col-span-2"><PrimaryButton type="submit">Salvar perfil</PrimaryButton></div>
      </form>
      <form
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-2"
        onSubmit={(event) => {
          event.preventDefault();
          const ok = onSenha(atual, nova);
          if (!ok) {
            setErro("Senha atual incorreta ou nova senha curta demais.");
            return;
          }
          setErro("");
          setAtual("");
          setNova("");
          toast.success("Senha alterada");
        }}
      >
        <Field label="Senha atual"><TextInput type="password" value={atual} onChange={(event) => setAtual(event.target.value)} /></Field>
        <Field label="Nova senha"><TextInput type="password" value={nova} onChange={(event) => setNova(event.target.value)} /></Field>
        {erro ? <p className="md:col-span-2" style={{ color: "#C62828", fontFamily: "var(--font-body)" }}>{erro}</p> : null}
        <div className="md:col-span-2"><GhostButton type="submit">Alterar senha</GhostButton></div>
      </form>
    </div>
  );
}

function TabPlanos({
  planos,
  onToggle,
  onCreate,
}: {
  planos: { id: string; nome: string; subtitulo: string; preco: number; beneficios: string[]; destaque: boolean }[];
  onToggle: (id: string, destaque: boolean) => void;
  onCreate: (plano: { nome: string; subtitulo: string; preco: number; beneficios: string[]; destaque: boolean }) => void;
}) {
  const [aberto, setAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [preco, setPreco] = useState(0);
  const [beneficios, setBeneficios] = useState("");
  const [destaque, setDestaque] = useState(false);

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3">
        {planos.map((plano) => (
          <article
            key={plano.id}
            className="flex min-w-0 flex-col gap-3 p-6"
            style={{
              background: "var(--color-surface)",
              border: plano.destaque ? "1px solid var(--color-primary)" : "1px solid var(--color-border)",
              borderRadius: "var(--radius-card)",
            }}
          >
            {plano.destaque ? (
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-primary)" }}>Destaque</span>
            ) : null}
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--color-text-primary)" }}>{plano.nome}</h3>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>{plano.subtitulo}</p>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--color-text-primary)" }}>{formatBRL(plano.preco)}</p>
            <ul>
              {plano.beneficios.map((item) => (
                <li key={item} style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{item}</li>
              ))}
            </ul>
            <label className="mt-2 flex min-h-11 items-center gap-3">
              <input type="checkbox" checked={plano.destaque} onChange={(event) => onToggle(plano.id, event.target.checked)} />
              <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>Destacar</span>
            </label>
          </article>
        ))}
      </div>
      <div>
        <PrimaryButton onClick={() => setAberto(true)}>Criar plano</PrimaryButton>
      </div>
      {aberto ? (
        <form
          className="grid w-full grid-cols-1 gap-4 p-6 md:grid-cols-2"
          style={{ background: "var(--color-surface)", borderRadius: "var(--radius-card)" }}
          onSubmit={(event) => {
            event.preventDefault();
            onCreate({
              nome,
              subtitulo,
              preco: Number(preco),
              beneficios: beneficios.split("\n").map((item) => item.trim()).filter(Boolean),
              destaque,
            });
            setAberto(false);
            setNome("");
            setSubtitulo("");
            setPreco(0);
            setBeneficios("");
            setDestaque(false);
            toast.success("Plano criado");
          }}
        >
          <Field label="Nome"><TextInput value={nome} onChange={(event) => setNome(event.target.value)} required /></Field>
          <Field label="Subtítulo"><TextInput value={subtitulo} onChange={(event) => setSubtitulo(event.target.value)} /></Field>
          <Field label="Preço"><TextInput type="number" min={0} value={preco} onChange={(event) => setPreco(Number(event.target.value))} /></Field>
          <Field label="Benefícios (um por linha)"><TextInput value={beneficios} onChange={(event) => setBeneficios(event.target.value)} /></Field>
          <label className="flex min-h-11 items-center gap-3 md:col-span-2">
            <input type="checkbox" checked={destaque} onChange={(event) => setDestaque(event.target.checked)} />
            <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>Destacar</span>
          </label>
          <div className="flex gap-3 md:col-span-2">
            <PrimaryButton type="submit">Salvar plano</PrimaryButton>
            <GhostButton onClick={() => setAberto(false)}>Cancelar</GhostButton>
          </div>
        </form>
      ) : null}
    </div>
  );
}
