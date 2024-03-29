import { stops } from "./stops";

export const getKorByEng = eng => {
  const stop = stops.find(stop => stop.eng === eng);
  return stop ? stop.kor : null;
};

export const getTimetablebyDay = (day, isUp, id) => {
  const timetable = [];
  const route = bus_routes.find(route => route.id === id);
  if (route) {
    const times = isUp ? route.up_start_time : route.down_start_time;
    times.forEach(time => {
      if (time.day === day) {
        timetable.push(...time.times);
      }
    });
  }
  return timetable;
};

export const bus_routes = [
  {
    title: "정문 - 연구협력관",
    stops: [
      { name: "정문", gap: 0, id: 1 },
      { name: "포스코관", gap: 28.57, id: 2 },
      { name: `공대\n삼거리`, gap: 57.14, id: 3 },
      { name: "기숙사\n삼거리", gap: 85.71, id: 4 },
      { name: "연구\n협력관", gap: 100, id: 5 },
    ],

    id: "ROUTE_0",
    up_start_time: [
      {
        day: "weekday",
        times: [
          "7:50",
          "7:55",
          "8:00",
          "8:10",
          "8:15",
          "8:20",
          "8:30",
          "8:35",
          "8:40",
          "8:50",
          "8:55",
          "9:00",
          "9:10",
          "9:15",
          "9:20",
          "9:30",
          "9:35",
          "9:40",
          "9:50",
          "9:55",
          "10:00",
          "10:10",
          "10:15",
          "10:20",
          "10:30",
          "10:35",
          "10:40",
          "10:50",
          "10:55",
          "11:00",
          "11:10",
          "11:20",
          "11:30",
          "11:40",
          "11:50",
          "13:00",
          "13:10",
          "13:20",
          "13:30",
          "13:40",
          "13:50",
          "14:00",
          "14:10",
          "14:20",
          "14:30",
          "14:40",
          "14:50",
          "15:00",
          "15:10",
          "15:20",
          "15:30",
          "15:40",
          "15:50",
          "15:55",
          "16:00",
          "16:10",
          "16:15",
          "16:20",
          "16:30",
          "16:35",
          "16:40",
          "16:50",
          "16:55",
          "17:00",
          "17:10",
          "17:15",
          "17:20",
          "17:30",
          "17:35",
          "17:40",
          "17:50",
          "17:55",
          "18:00",
          "18:10",
          "18:15",
          "18:20",
          "18:30",
          "18:35",
          "18:40",
          "18:50",
          "18:55",
          "19:00",
          "19:10",
          "19:15",
          "19:20",
          "19:30",
          "19:35",
          "19:40",
          "19:50",
          "19:55",
          "20:00",
          "20:10",
          "20:15",
          "20:20",
          "20:30",
          "20:35",
          "20:40",
          "20:50",
          "20:55",
          "21:00",
        ],
      },
      {
        day: "saturday",
        times: [],
      },
      {
        day: "sunday",
        times: [],
      },
    ],
    down_start_time: [
      {
        day: "weekday",
        times: [
          "8:00",
          "8:05",
          "8:10",
          "8:20",
          "8:25",
          "8:30",
          "8:40",
          "8:45",
          "8:50",
          "9:00",
          "9:05",
          "9:10",
          "9:20",
          "9:25",
          "9:30",
          "9:40",
          "9:45",
          "9:50",
          "10:00",
          "10:05",
          "10:10",
          "10:20",
          "10:25",
          "10:30",
          "10:40",
          "10:45",
          "10:50",
          "11:00",
          "11:05",
          "11:10",
          "11:20",
          "11:30",
          "11:40",
          "11:50",
          "13:10",
          "13:20",
          "13:30",
          "13:40",
          "13:50",
          "14:00",
          "14:10",
          "14:20",
          "14:30",
          "14:40",
          "14:50",
          "15:00",
          "15:10",
          "15:20",
          "15:30",
          "15:40",
          "15:50",
          "16:00",
          "16:05",
          "16:10",
          "16:20",
          "16:25",
          "16:30",
          "16:40",
          "16:45",
          "16:50",
          "17:00",
          "17:05",
          "17:10",
          "17:20",
          "17:25",
          "17:30",
          "17:40",
          "17:45",
          "17:50",
          "18:00",
          "18:05",
          "18:10",
          "18:20",
          "18:25",
          "18:30",
          "18:40",
          "18:45",
          "18:50",
          "19:00",
          "19:05",
          "19:10",
          "19:20",
          "19:25",
          "19:30",
          "19:40",
          "19:45",
          "19:50",
          "20:00",
          "20:05",
          "20:10",
          "20:20",
          "20:25",
          "20:30",
          "20:40",
          "20:45",
          "20:50",
          "21:00",
        ],
      },
      { day: "saturday", times: [] },
      { day: "sunday", times: [] },
    ],
  },
  {
    title: "정문 - 한우리집",
    stops: [
      { name: "정문", gap: 0, id: 1 },
      { name: "포스코관", gap: 28.57, id: 2 },
      { name: `공대\n삼거리`, gap: 57.14, id: 3 },
      { name: "한우리집", gap: 100, id: 6 },
    ],
    id: "ROUTE_1",
    up_start_time: [
      {
        day: "weekday",
        times: [
          "8:25",
          "8:45",
          "9:05",
          "9:25",
          "9:45",
          "10:05",
          "10:25",
          "10:45",
          "13:25",
          "13:45",
          "14:05",
          "14:25",
          "14:45",
          "15:05",
          "15:25",
          "15:45",
          "16:05",
        ],
      },
      { day: "saturday", times: [] },
      { day: "sunday", times: [] },
    ],
    down_start_time: [
      {
        day: "weekday",
        times: [
          "8:35",
          "8:55",
          "9:15",
          "9:35",
          "9:55",
          "10:15",
          "10:35",
          "10:55",
          "13:35",
          "13:55",
          "14:15",
          "14:35",
          "14:55",
          "15:15",
          "15:35",
          "15:55",
          "16:15",
        ],
      },
      { day: "saturday", times: [] },
      { day: "sunday", times: [] },
    ],
  },
  {
    title: "기숙사 야간 노선",
    stops: [
      { name: "조형대\n삼거리", gap: 0, id: 8 },
      { name: "포스코관", gap: 28.57, id: 2 },
      { name: `한우리집\n주차장`, gap: 85.71, id: 6 },
      { name: "이하\n우스", gap: 100, id: 7 },
    ],
    id: "ROUTE_2",
    up_start_time: [
      {
        day: "weekday",
        times: [
          "21:10",
          "21:20",
          "21:30",
          "21:40",
          "21:50",
          "22:00",
          "22:10",
          "22:20",
          "22:30",
          "22:40",
          "22:50",
          "23:00",
          "23:10",
          "23:20",
          "23:30",
          "23:40",
        ],
      },
      {
        day: "saturday",
        times: [
          "19:10",
          "19:20",
          "19:30",
          "19:40",
          "19:50",
          "20:00",
          "20:10",
          "20:20",
          "20:30",
          "20:40",
          "20:50",
          "21:00",
          "21:10",
          "21:20",
          "21:30",
          "21:40",
          "21:50",
          "22:00",
          "22:10",
          "22:20",
          "22:30",
          "22:40",
          "22:50",
          "23:00",
          "23:10",
          "23:20",
          "23:30",
          "23:40",
        ],
      },
      { day: "sunday", times: [] },
    ],
    down_start_time: [
      {
        day: "weekday",
        times: [
          "21:20",
          "21:30",
          "21:40",
          "21:50",
          "22:00",
          "22:10",
          "22:20",
          "22:30",
          "22:40",
          "22:50",
          "23:00",
          "23:10",
          "23:20",
          "23:30",
          "23:40",
          "23:50",
        ],
      },
      {
        day: "saturday",
        times: [
          "19:20",
          "19:30",
          "19:40",
          "19:50",
          "20:00",
          "20:10",
          "20:20",
          "20:30",
          "20:40",
          "20:50",
          "21:00",
          "21:10",
          "21:20",
          "21:30",
          "21:40",
          "21:50",
          "22:00",
          "22:10",
          "22:20",
          "22:30",
          "22:40",
          "22:50",
          "23:00",
          "23:10",
          "23:20",
          "23:30",
          "23:40",
          "23:50",
        ],
      },
      { day: "sunday", times: [] },
    ],
  },
];
