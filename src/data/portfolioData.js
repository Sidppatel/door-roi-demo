export const kpiData = [
  {
    label: 'Total Monthly NOI',
    value: '$7,099',
    accent: 'accent',
    meta: [
      { type: 'change-up', text: '$284 vs last month' },
      { type: 'text', text: 'After debt service & expenses' },
    ],
  },
  {
    label: 'Portfolio Occupancy',
    value: '100%',
    accent: 'accent',
    meta: [
      { type: 'text', text: '9 of 9 units occupied' },
      { type: 'text', text: 'Industry target: 92%+' },
    ],
  },
  {
    label: 'Rent Collected (This Month)',
    value: '$9,850',
    accent: 'warn',
    meta: [
      { type: 'text', text: 'of $10,950 billed' },
      { type: 'change-alert', text: '1 tenant 5 days late' },
    ],
  },
  {
    label: 'NOI per Door',
    value: '$789',
    accent: 'accent',
    meta: [
      { type: 'text', text: 'Monthly, after expenses' },
      { type: 'change-up', text: '4.2% vs Q4 2025' },
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
    status: 'Below market',
    statusType: 'risk',
  },
  {
    name: 'West Mobile Fourplex',
    neighborhood: 'West Mobile',
    units: 4,
    occupancy: '100%',
    rent: '$4,400',
    expenses: '$1,424',
    noi: '$2,976',
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
    occupancy: '100%',
    rent: '$1,500',
    expenses: '$655',
    noi: '$845',
    noiPositive: true,
    status: 'Healthy',
    statusType: 'ok',
  },
];

export const actionItems = [
  {
    property: 'West Mobile Unit 2',
    note: 'Tenant 5 days late on $1,100 rent. Auto-reminder hasn’t been sent.',
    severity: 'amber',
    buttonText: 'Send reminder',
  },
  {
    property: 'West Mobile Fourplex Unit 4',
    note: 'Lease ending in 28 days. Renewal terms not yet confirmed.',
    severity: 'amber',
    buttonText: 'Start renewal',
  },
  {
    property: 'Midtown Craftsman',
    note: 'Rent $150/mo below comparable market ($1,350 vs. $1,500). Plan increase at next renewal.',
    severity: 'amber',
    buttonText: 'Plan increase',
  },
];

export const chartData = {
  noiBar: {
    labels: ['Spring Hill', 'Midtown', 'W. Mobile 4plex', 'Saraland', 'LoDa Condo'],
    values: [1732, 810, 2976, 736, 845],
  },
  expenses: {
    labels: ['Insurance', 'Property Tax', 'Maintenance', 'PM Fees', 'Utilities'],
    values: [880, 808, 1110, 668, 385],
    total: '$3,851',
  },
  noiTrend: [5200, 5350, 5450, 5800, 6100, 5950, 6450, 6700, 6650, 6850, 6900, 7099],
  occupancy: {
    labels: ['Spring Hill', 'Midtown', 'W. Mobile', 'Saraland', 'LoDa Condo'],
    values: [100, 100, 100, 100, 100],
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
