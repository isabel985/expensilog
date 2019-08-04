export const user = {
  id: '432345',
  name: 'Jennifer',
  avatarImg: 'jennifer.png',
  supervisor: {
    id: '98723',
    name: 'Steve',
    avatarImg: 'steve.png',
  }
};

export const statements = [
  {
    id: '123',
    name: 'June 2019',
    status: 'approved',
    amount: 1234,
    from: user.name,
    to: user.supervisor.name,
    date: 'Aug 10, 2019',
  },
  {
    id: '456',
    name: 'July 2019',
    status: 'open',
    amount: 5678,
    from: user.name,
    to: user.supervisor.name,
    date: 'Sept 10, 2019',
  },
  {
    id: '789',
    name: 'August 2019',
    status: 'processing',
    amount: 678,
    from: user.name,
    to: user.supervisor.name,
    date: 'Sept 10, 2019',
  },
  {
    id: '223',
    name: 'July 2019',
    status: 'reimbursed',
    amount: 5678,
    from: user.name,
    to: user.supervisor.name,
    date: 'Sept 10, 2019',
  },
  {
    id: '898',
    name: 'July 2019',
    status: 'closed',
    amount: 5678,
    from: user.name,
    to: user.supervisor.name,
    date: 'Sept 10, 2019',
  },
]