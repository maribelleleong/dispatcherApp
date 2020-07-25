const DROP_OFF = 'drop-off';
const PICK_UP = 'pick-up';
const OTHER = 'other';

const dispatcherInfo = {
  'Aaron Smith': {
    '1': {
      '1': {
        tasks: [
          {
            id: '1001',
            type: DROP_OFF,
            start_time: 9,
            end_time: 12,
            location: 'Costco',
          },
          {
            id: '1002',
            type: OTHER,
            start_time: 12,
            end_time: 14,
          },
          {
            id: '1003',
            type: DROP_OFF,
            start_time: 14,
            end_time: 16,
            location: 'Superstore',
          },
        ],
      },
      '2': {
        tasks: [
          {
            id: '1004',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'McDonald',
          },
          {
            id: '1005',
            type: DROP_OFF,
            start_time: 15,
            end_time: 17,
            location: 'Sobeys',
          },
          {
            id: '1006',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
      '3': {
        tasks: [
          {
            id: '1007',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'Staples',
          },
        ],
      },
      '5': {
        tasks: [
          {
            id: '1008',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'Staples',
          },
        ],
      },
      '7': {
        tasks: [
          {
            id: '1009',
            type: PICK_UP,
            start_time: 8,
            end_time: 10,
            location: 'McDonald',
          },
          {
            id: '1010',
            type: DROP_OFF,
            start_time: 15,
            end_time: 17,
            location: 'Sobeys',
          },
          {
            id: '1011',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
    },

    '2': {
      '1': {
        tasks: [
          {
            id: '1012',
            type: DROP_OFF,
            start_time: 1,
            end_time: 3,
            location: 'Best Buy',
          },
          {
            id: '1013',
            type: OTHER,
            start_time: 12,
            end_time: 14,
          },
          {
            id: '1014',
            type: PICK_UP,
            start_time: 14,
            end_time: 16,
            location: 'Rona',
          },
          {
            id: '1015',
            type: DROP_OFF,
            start_time: 14,
            end_time: 16,
            location: 'Superstore',
          },
        ],
      },
      '5': {
        tasks: [
          {
            id: '1016',
            type: PICK_UP,
            start_time: 12,
            end_time: 14,
            location: 'McDonald',
          },
          {
            id: '1017',
            type: OTHER,
            start_time: 15,
            end_time: 17,
            location: 'Tim Hortons',
          },
          {
            id: '1018',
            type: DROP_OFF,
            start_time: 19,
            end_time: 20,
            location: 'Canadian Tire',
          },
        ],
      },
      '6': {
        tasks: [
          {
            id: '1019',
            type: PICK_UP,
            start_time: 6,
            end_time: 8,
            location: 'Staples',
          },
        ],
      },
      '7': {
        tasks: [
          {
            id: '1020',
            type: PICK_UP,
            start_time: 8,
            end_time: 10,
            location: 'McDonald',
          },
          {
            id: '1021',
            type: DROP_OFF,
            start_time: 10,
            end_time: 12,
            location: 'Sobeys',
          },
          {
            id: '1022',
            type: OTHER,
            start_time: 12,
            end_time: 13,
            location: "Wendy's",
          },
          {
            id: '1023',
            type: DROP_OFF,
            start_time: 13,
            end_time: 14,
            location: 'Home Depot',
          },
          {
            id: '1024',
            type: PICK_UP,
            start_time: 16,
            end_time: 18,
            location: 'Dollarama',
          },
        ],
      },
    },
  },
};
