import { describe, expect, it } from "vitest";
import { escapeLikePattern, formatPlanPrice, parseMoney, planDatesAreValid } from "./values";

describe("valor do plano", () => {
  it("aceita o preço brasileiro digitado no formulário", () => {
    expect(parseMoney("199,90")).toBe(199.9);
    expect(parseMoney("1.234,50")).toBe(1234.5);
    expect(parseMoney("R$ 89,90")).toBe(89.9);
  });

  it("aceita o preço que vem do banco", () => {
    expect(parseMoney("199.90")).toBe(199.9);
  });

  it("recusa valor vazio ou texto", () => {
    expect(parseMoney("")).toBeNull();
    expect(parseMoney("abc")).toBeNull();
  });

  it("mostra o preço do plano no formato do formulário", () => {
    expect(formatPlanPrice("199.90")).toBe("199,90");
    expect(formatPlanPrice(89.9)).toBe("89,90");
  });
});

describe("datas do plano", () => {
  it("aceita vencimento no mesmo dia ou depois do início", () => {
    expect(planDatesAreValid("2026-11-05", "2026-11-05")).toBe(true);
    expect(planDatesAreValid("2026-11-05", "2026-12-05")).toBe(true);
  });

  it("recusa vencimento anterior ao início", () => {
    expect(planDatesAreValid("2026-12-05", "2026-11-05")).toBe(false);
    expect(planDatesAreValid("", "2026-11-05")).toBe(false);
  });
});

describe("busca de aluno", () => {
  it("não deixa % e _ virarem busca livre", () => {
    expect(escapeLikePattern("100%_off")).toBe("100\\%\\_off");
  });
});
