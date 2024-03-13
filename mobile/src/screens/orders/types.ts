export interface Orders {
  id: number;
  type: string;
  listOfOrders: OrderContent[];
}

export interface OrderContent {
  table: number;
  status: 'IN_PRODUCTION' | 'READY' | 'FINISHED';
  ingredients: Ingredients[]
}

export interface Ingredients {
  id: number;
  quantity: number;
  name: string;
}

export const statusConfig = {
  IN_PRODUCTION: {
    label: 'Entrou em produção',
    textColor: 'rgba(215, 108, 48, 1)',
    backgroundColor: 'rgba(215, 108, 48, 0.05)'
  },
  READY: {
    label: 'Pronto!',
    textColor: 'rgba(48, 215, 135, 1)',
    backgroundColor: 'rgba(48, 215, 135, 0.05)',
  },
  FINISHED: {
    label: 'Finalizado em 03/03/2024',
    textColor: 'rgba(102, 102, 102, 1)',
    backgroundColor: 'rgba(102, 102, 102, 0.05)',
  },
}

export const ordersMock: Orders[] = [
  {
    id: 1,
    type: 'Em andamento',
    listOfOrders: [{
      table: 1,
      status: 'READY',
      ingredients: [
        {
          id: 1,
          name: 'Frango com catupiry',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Quatro queijos',
          quantity: 2,
        },
      ]},
    ],
  },
  {
    id: 2,
    type: 'Anteriores',
    listOfOrders: [
      {
        table: 2,
        status: 'IN_PRODUCTION',
        ingredients: [
          {
            id: 3,
            name: 'X-bacon',
            quantity: 1,
          },
          {
            id: 4,
            name: 'Coca cola',
            quantity: 1,
          },
        ]
      },
      {
        table: 3,
        status: 'FINISHED',
        ingredients: [
          {
            id: 3,
            name: 'X-bacon',
            quantity: 1,
          },
          {
            id: 4,
            name: 'Coca cola',
            quantity: 1,
          },
        ]
      },
    ],
  },
];
