export interface Regiao {
  id: number;
  sigla: string;
  nome: string;
}

export interface Estados {
  id: number;
  sigla: string;
  nome: string;
  regiao: Regiao;
}
