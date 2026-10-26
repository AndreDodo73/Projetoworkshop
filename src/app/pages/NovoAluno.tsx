import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { AdminLayout } from "../components/AdminLayout";
import { AdminPage } from "../components/admin-ui";
import { Field, PrimaryButton, SectionTitle, SelectInput, TextInput } from "../components/fields";
import { calcImc, hasParqWarning } from "../domain/finance";
import { useAcademy } from "../domain/store";
import type { DadosFisicos, DadosSaude, NovoAlunoInput, Objetivos, ParQ } from "../domain/types";

const saudeInicial: DadosSaude = {
  doenca: "Não",
  cardiaco: "Não",
  pressao: "NÃO",
  diabetes: "Não",
  desmaios: "Não",
  respiratorio: "Não",
  articular: "Não",
  cirurgia: "Não",
  medicacao: "Não",
  gestante: "N/A",
  limitacao: "Não",
  recomendacaoMedica: "Não",
};

const parqInicial: ParQ = { q1: "Não", q2: "Não", q3: "Não", q4: "Não", q5: "Não", q6: "Não" };

const objetivosInicial: Objetivos = {
  objetivo: "Saúde Geral",
  treinouAntes: "Nunca treinei",
  tempoPratica: "",
  vezesSemana: "3x",
  horarioPref: "",
};

const fisicosInicial: DadosFisicos = { peso: "", altura: "", gordura: "", medidas: "" };

const saudePerguntas: Array<{ key: keyof DadosSaude; label: string; options: string[] }> = [
  { key: "doenca", label: "Possui alguma doença diagnosticada?", options: ["Não", "Sim"] },
  { key: "cardiaco", label: "Problemas cardíacos?", options: ["Não", "Sim"] },
  { key: "pressao", label: "Pressão alta ou baixa?", options: ["NÃO", "ALTA", "BAIXA"] },
  { key: "diabetes", label: "Possui diabetes?", options: ["Não", "Sim"] },
  { key: "desmaios", label: "Desmaios ou tonturas frequentes?", options: ["Não", "Sim"] },
  { key: "respiratorio", label: "Problemas respiratórios?", options: ["Não", "Sim"] },
  { key: "articular", label: "Problemas articulares?", options: ["Não", "Sim"] },
  { key: "cirurgia", label: "Já realizou cirurgia?", options: ["Não", "Sim"] },
  { key: "medicacao", label: "Faz uso de medicação contínua?", options: ["Não", "Sim"] },
  { key: "gestante", label: "Está gestante?", options: ["N/A", "Não", "Sim"] },
  { key: "limitacao", label: "Possui limitação física?", options: ["Não", "Sim"] },
  { key: "recomendacaoMedica", label: "Possui recomendação médica para prática de exercícios?", options: ["Não", "Sim"] },
];

const parqPerguntas: Array<{ key: keyof ParQ; label: string }> = [
  { key: "q1", label: "Algum médico já disse que você possui problema cardíaco?" },
  { key: "q2", label: "Sente dor no peito ao realizar atividade física?" },
  { key: "q3", label: "Sentiu dor no peito no último mês?" },
  { key: "q4", label: "Perde o equilíbrio por tontura ou já perdeu a consciência?" },
  { key: "q5", label: "Possui problema ósseo ou articular que pode piorar com exercício?" },
  { key: "q6", label: "Seu médico já recomendou restrição de atividade física?" },
];

function today() {
  return new Date().toISOString().slice(0, 10);
}

function plus30() {
  const date = new Date();
  date.setDate(date.getDate() + 30);
  return date.toISOString().slice(0, 10);
}

export function NovoAluno() {
  const { state, addAluno } = useAcademy();
  const navigate = useNavigate();
  const planoPadrao = state.planos.find((plano) => plano.destaque) ?? state.planos[0];
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [sexo, setSexo] = useState("Feminino");
  const [estadoCivil, setEstadoCivil] = useState("Solteiro(a)");
  const [profissao, setProfissao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contatoEmerg, setContatoEmerg] = useState("");
  const [telEmerg, setTelEmerg] = useState("");
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);
  const [saude, setSaude] = useState(saudeInicial);
  const [parq, setParq] = useState(parqInicial);
  const [objetivos, setObjetivos] = useState(objetivosInicial);
  const [fisicos, setFisicos] = useState(fisicosInicial);
  const [imc, setImc] = useState<number | null>(null);
  const [planoId, setPlanoId] = useState(planoPadrao?.id ?? "");
  const [valorPlano, setValorPlano] = useState(planoPadrao?.preco ?? 0);
  const [dataInicio, setDataInicio] = useState(today);
  const [dataVenc, setDataVenc] = useState(plus30);
  const [formaPgto, setFormaPgto] = useState("PIX");
  const [termoAceito, setTermoAceito] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    setImc(calcImc(fisicos.peso, fisicos.altura));
  }, [fisicos.peso, fisicos.altura]);

  const onPlano = (id: string) => {
    setPlanoId(id);
    const plano = state.planos.find((item) => item.id === id);
    if (plano) setValorPlano(plano.preco);
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!termoAceito) {
      setErro("O termo de responsabilidade precisa ser aceito.");
      return;
    }
    const input: NovoAlunoInput = {
      nome,
      dataNasc,
      cpf,
      rg,
      sexo,
      estadoCivil,
      profissao,
      telefone,
      email,
      endereco,
      contatoEmerg,
      telEmerg,
      fotoUrl,
      saude,
      parq,
      objetivos,
      fisicos,
      termoAceito,
      planoId,
      valorPlano: Number(valorPlano),
      dataInicio,
      dataVenc,
      formaPgto,
    };
    const result = addAluno(input);
    if (!result.ok) {
      setErro(result.error);
      return;
    }
    toast.success(`Aluno #${result.matricula} cadastrado`);
    navigate("/alunos");
  };

  return (
    <AdminLayout>
      <AdminPage title="Novo aluno">
        <form onSubmit={onSubmit} className="flex w-full flex-col gap-12">
          <section>
            <SectionTitle eyebrow="01" title="Dados pessoais" />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Nome completo"><TextInput value={nome} onChange={(event) => setNome(event.target.value)} required /></Field>
              <Field label="Data de nascimento"><TextInput type="date" value={dataNasc} onChange={(event) => setDataNasc(event.target.value)} required /></Field>
              <Field label="CPF"><TextInput value={cpf} onChange={(event) => setCpf(event.target.value)} placeholder="000.000.000-00" required /></Field>
              <Field label="RG"><TextInput value={rg} onChange={(event) => setRg(event.target.value)} /></Field>
              <Field label="Sexo">
                <SelectInput value={sexo} onChange={(event) => setSexo(event.target.value)}>
                  <option>Feminino</option>
                  <option>Masculino</option>
                  <option>Outro</option>
                </SelectInput>
              </Field>
              <Field label="Estado civil">
                <SelectInput value={estadoCivil} onChange={(event) => setEstadoCivil(event.target.value)}>
                  <option>Solteiro(a)</option>
                  <option>Casado(a)</option>
                  <option>Divorciado(a)</option>
                  <option>Viúvo(a)</option>
                  <option>União estável</option>
                </SelectInput>
              </Field>
              <Field label="Profissão"><TextInput value={profissao} onChange={(event) => setProfissao(event.target.value)} /></Field>
              <Field label="WhatsApp"><TextInput value={telefone} onChange={(event) => setTelefone(event.target.value)} required /></Field>
              <Field label="E-mail"><TextInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></Field>
              <Field label="Endereço"><TextInput value={endereco} onChange={(event) => setEndereco(event.target.value)} /></Field>
              <Field label="Contato de emergência"><TextInput value={contatoEmerg} onChange={(event) => setContatoEmerg(event.target.value)} /></Field>
              <Field label="Telefone de emergência"><TextInput value={telEmerg} onChange={(event) => setTelEmerg(event.target.value)} /></Field>
              <Field label="Foto">
                <TextInput
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = () => setFotoUrl(typeof reader.result === "string" ? reader.result : null);
                    reader.readAsDataURL(file);
                  }}
                />
              </Field>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="02" title="Saúde" />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              {saudePerguntas.map((pergunta) => (
                <Field key={pergunta.key} label={pergunta.label}>
                  <SelectInput
                    value={saude[pergunta.key]}
                    onChange={(event) => setSaude((prev) => ({ ...prev, [pergunta.key]: event.target.value }))}
                  >
                    {pergunta.options.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </SelectInput>
                </Field>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="03" title="PAR-Q" />
            <div className="grid w-full grid-cols-1 gap-4">
              {parqPerguntas.map((pergunta) => (
                <Field key={pergunta.key} label={pergunta.label}>
                  <SelectInput value={parq[pergunta.key]} onChange={(event) => setParq((prev) => ({ ...prev, [pergunta.key]: event.target.value }))}>
                    <option>Não</option>
                    <option>Sim</option>
                  </SelectInput>
                </Field>
              ))}
            </div>
            {hasParqWarning(parq) ? (
              <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)" }}>
                Há restrição no PAR-Q. O aluno precisa de avaliação antes de treinar.
              </p>
            ) : null}
          </section>

          <section>
            <SectionTitle eyebrow="04" title="Objetivos" />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Objetivo">
                <SelectInput value={objetivos.objetivo} onChange={(event) => setObjetivos((prev) => ({ ...prev, objetivo: event.target.value }))}>
                  {["Emagrecimento", "Hipertrofia", "Condicionamento Físico", "Reabilitação", "Saúde Geral", "Outro"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </SelectInput>
              </Field>
              <Field label="Já treinou antes?">
                <SelectInput value={objetivos.treinouAntes} onChange={(event) => setObjetivos((prev) => ({ ...prev, treinouAntes: event.target.value }))}>
                  <option>Sim, regularmente</option>
                  <option>Sim, esporadicamente</option>
                  <option>Nunca treinei</option>
                </SelectInput>
              </Field>
              <Field label="Tempo de prática"><TextInput value={objetivos.tempoPratica} onChange={(event) => setObjetivos((prev) => ({ ...prev, tempoPratica: event.target.value }))} placeholder="6 meses" /></Field>
              <Field label="Vezes por semana">
                <SelectInput value={objetivos.vezesSemana} onChange={(event) => setObjetivos((prev) => ({ ...prev, vezesSemana: event.target.value }))}>
                  {["1x", "2x", "3x", "4x", "5x ou mais"].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </SelectInput>
              </Field>
              <Field label="Horário preferido"><TextInput value={objetivos.horarioPref} onChange={(event) => setObjetivos((prev) => ({ ...prev, horarioPref: event.target.value }))} placeholder="manhã" /></Field>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="05" title="Dados físicos" />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Peso (kg)"><TextInput inputMode="decimal" value={fisicos.peso} onChange={(event) => setFisicos((prev) => ({ ...prev, peso: event.target.value }))} /></Field>
              <Field label="Altura (cm)"><TextInput inputMode="decimal" value={fisicos.altura} onChange={(event) => setFisicos((prev) => ({ ...prev, altura: event.target.value }))} /></Field>
              <Field label="Gordura (%)"><TextInput inputMode="decimal" value={fisicos.gordura} onChange={(event) => setFisicos((prev) => ({ ...prev, gordura: event.target.value }))} /></Field>
              <Field label="IMC"><TextInput value={imc ? imc.toFixed(1) : "—"} readOnly /></Field>
              <Field label="Medidas"><TextInput value={fisicos.medidas} onChange={(event) => setFisicos((prev) => ({ ...prev, medidas: event.target.value }))} /></Field>
            </div>
          </section>

          <section>
            <SectionTitle eyebrow="06" title="Plano" />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Plano">
                <SelectInput value={planoId} onChange={(event) => onPlano(event.target.value)}>
                  {state.planos.map((plano) => (
                    <option key={plano.id} value={plano.id}>{plano.nome}</option>
                  ))}
                </SelectInput>
              </Field>
              <Field label="Valor negociado"><TextInput type="number" min={0} value={valorPlano} onChange={(event) => setValorPlano(Number(event.target.value))} /></Field>
              <Field label="Início"><TextInput type="date" value={dataInicio} onChange={(event) => setDataInicio(event.target.value)} required /></Field>
              <Field label="Vencimento"><TextInput type="date" value={dataVenc} onChange={(event) => setDataVenc(event.target.value)} required /></Field>
              <Field label="Forma de pagamento">
                <SelectInput value={formaPgto} onChange={(event) => setFormaPgto(event.target.value)}>
                  <option>PIX</option>
                  <option>Cartão</option>
                  <option>Boleto</option>
                  <option>Débito Automático</option>
                </SelectInput>
              </Field>
            </div>
            <label className="mt-4 flex min-h-11 items-center gap-3">
              <input type="checkbox" checked={termoAceito} onChange={(event) => setTermoAceito(event.target.checked)} />
              <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>Aceito o termo de responsabilidade.</span>
            </label>
          </section>

          {erro ? <p style={{ fontFamily: "var(--font-body)", color: "#C62828" }}>{erro}</p> : null}
          <div>
            <PrimaryButton type="submit">Cadastrar aluno</PrimaryButton>
          </div>
        </form>
      </AdminPage>
    </AdminLayout>
  );
}
