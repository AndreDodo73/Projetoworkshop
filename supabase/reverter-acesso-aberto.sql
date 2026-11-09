-- Desfaz o acesso aberto temporario (migration "acesso_aberto_temporario_sem_login").
-- Rode quando o login do painel for obrigatorio. Depois disso so a equipe logada acessa os dados.
-- Tambem troque VITE_REQUIRE_AUTH para true em .env.local.

do $$
declare
  politica record;
begin
  for politica in
    select schemaname, tablename, policyname
    from pg_policies
    where policyname like 'aberto\_temp\_%' escape '\'
  loop
    execute format('drop policy %I on %I.%I', politica.policyname, politica.schemaname, politica.tablename);
  end loop;
end;
$$;

revoke all on table
  public.configuracoes_academia,
  public.planos,
  public.alunos,
  public.dados_saude,
  public.parq,
  public.objetivos,
  public.dados_fisicos,
  public.planos_alunos,
  public.pagamentos,
  public.checkins,
  public.termos_responsabilidade,
  public.notificacoes,
  public.alunos_financeiro
from anon;

revoke all on sequence public.alunos_matricula_seq from anon;
