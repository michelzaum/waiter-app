export interface DeletedUser {
  id: string;
  name: string;
  email: string;
  role: string;
  actions: string;
}

export const usersColumns = [
  'Nome', 'E-mail', 'Cargo', 'Ações',
];

export const usersMockData: DeletedUser[] = [
  {
    id: '1',
    name: 'Fulano de Tal',
    email: 'fulano@gmail.com',
    role: 'Garçom',
    actions: 'ver/excluir',
  },
  {
    id: '2',
    name: 'Fulano de Tal',
    email: 'fulano@gmail.com',
    role: 'Garçom',
    actions: 'ver/excluir',
  },
  {
    id: '3',
    name: 'Michel de Oliveira',
    email: 'michel@gmail.com',
    role: 'Garçom',
    actions: 'ver/excluir',
  },
];
