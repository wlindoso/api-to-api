import express, { Request, Response } from "express";

const app = express();
const port = 3000;

const clientes = [
  { id: 1, nome: "Cliente1", email: "cliente1@email.com" },
  { id: 2, nome: "Cliente2", email: "cliente2@email.com" },
  { id: 3, nome: "Cliente3", email: "cliente3@email.com" },
  { id: 4, nome: "Cliente4", email: "cliente4@email.com" },
  { id: 5, nome: "Cliente5", email: "cliente5@email.com" },
  { id: 6, nome: "Cliente6", email: "cliente6@email.com" },
  { id: 7, nome: "Cliente7", email: "cliente7@email.com" },
  { id: 8, nome: "Cliente8", email: "cliente8@email.com" },
  { id: 9, nome: "Cliente9", email: "cliente9@email.com" },
  { id: 10, nome: "Cliente10", email: "cliente10@email.com" },
  // Adicione mais clientes conforme necessário
];

app.get("/api/clientes", (req: Request, res: Response) => {
  res.json(clientes);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
