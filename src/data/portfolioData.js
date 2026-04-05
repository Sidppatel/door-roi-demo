export const kpiData = [
  {
    label: 'Total Monthly NOI',
    value: '$4,199',
    accent: 'accent',
    meta: [
      { type: 'change-down', text: '$71 vs last month' },
      { type: 'text', text: 'After debt service & expenses' },
    ],
  },
  {
    label: 'Portfolio Occupancy',
    value: '77.8%',
    accent: 'warn',
    meta: [
      { type: 'text', text: '7 of 9 units occupied' },
      { type: 'text', text: 'Target: 92%+' },
    ],
  },
  {
    label: 'Rent Collected (This Month)',
    value: '$8,050',
    accent: 'accent',
    meta: [
      { type: 'text', text: 'of $10,850 potential' },
      { type: 'change-alert', text: 'Includes delinquencies' },
    ],
  },
  {
    label: 'Vacancy Loss (Monthly)',
    value: '$2,500',
    accent: 'danger',
    meta: [
      { type: 'text', text: '2 units vacant' },
      { type: 'change-down', text: 'Revenue lost' },
    ],
  },
];

export const properties = [
  {
    name: 'Spring Hill Duplex',
    neighborhood: 'Spring Hill',
    units: 2,
    occupancy: '100%',
    rent: '$2,500',
    expenses: '$768',
    noi: '$1,732',
    noiPositive: true,
    status: 'Healthy',
    statusType: 'ok',
  },
  {
    name: 'Midtown Craftsman',
    neighborhood: 'Midtown',
    units: 1,
    occupancy: '100%',
    rent: '$1,350',
    expenses: '$540',
    noi: '$810',
    noiPositive: true,
    status: 'Healthy',
    statusType: 'ok',
  },
  {
    name: 'West Mobile Fourplex',
    neighborhood: 'West Mobile',
    units: 4,
    occupancy: '75%',
    rent: '$3,300',
    expenses: '$1,424',
    noi: '$1,876',
    noiPositive: true,
    status: 'Late Payment',
    statusType: 'risk',
  },
  {
    name: 'Saraland Ranch',
    neighborhood: 'Saraland',
    units: 1,
    occupancy: '100%',
    rent: '$1,200',
    expenses: '$464',
    noi: '$736',
    noiPositive: true,
    status: 'Healthy',
    statusType: 'ok',
  },
  {
    name: 'Downtown LoDa Condo',
    neighborhood: 'Downtown LoDa',
    units: 1,
    occupancy: 'Vacant',
    rent: '$0',
    expenses: '$655',
    noi: '-$655',
    noiPositive: false,
    status: 'Vacant 8 days',
    statusType: 'vacant',
  },
];

export const actionItems = [
  {
    property: 'Downtown LoDa Condo',
    note: 'Vacant 8 days. Estimated loss at 30 days: $1,400',
    severity: 'amber',
    buttonText: 'List now',
  },
  {
    property: 'West Mobile Unit 3',
    note: 'Vacant 31 days. Monthly loss: $1,100. Action needed.',
    severity: 'red',
    buttonText: 'Review pricing',
  },
  {
    property: 'West Mobile Unit 2',
    note: 'Jerome T. rent 12 days overdue. $1,100 outstanding.',
    severity: 'amber',
    buttonText: 'Send reminder',
  },
];

export const chartData = {
  noiBar: {
    labels: ['Spring Hill', 'Midtown', 'W. Mobile 4plex', 'Saraland', 'LoDa Condo'],
    values: [1732, 810, 1876, 736, -655],
  },
  expenses: {
    labels: ['Insurance', 'Property Tax', 'Maintenance', 'PM Fees', 'Utilities'],
    values: [880, 808, 1110, 668, 385],
    total: '$3,851',
  },
  noiTrend: [4820, 4750, 4680, 4920, 5100, 4890, 5210, 4980, 4650, 4430, 4270, 4199],
  occupancy: {
    labels: ['Spring Hill', 'Midtown', 'W. Mobile', 'Saraland', 'LoDa Condo'],
    values: [100, 100, 75, 100, 0],
  },
};

export const cityOptions = [
  'Mobile, AL',
  'Saraland, AL',
  'Daphne, AL',
  'Fairhope, AL',
  'Spanish Fort, AL',
  'Gulf Shores, AL',
  'Orange Beach, AL',
  'Baldwin County, AL',
  'Other',
];

export const propertiesManaged = [
  '1–5 properties',
  '6–15 properties',
  '16–50 properties',
  '51+ properties',
];

export const trackingOptions = [
  'Excel or spreadsheets',
  'QuickBooks only',
  'AppFolio / Buildium / other PM software',
  'Nothing formal yet',
];
