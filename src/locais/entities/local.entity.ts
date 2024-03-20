import { randomUUID } from 'crypto';

export class Local {
  id: string;

  capacidade: number;

  CEP: string;

  logradouro: string;

  numero: number;

  bairro: string;

  cidade: string;

  UF: string;

  constructor() {
    this.id = randomUUID();
  }
}
