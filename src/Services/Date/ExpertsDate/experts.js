import ava from "./../../../assets/Experts/2ddd34475af2616515a851c20c1c5b00b37fa5f2.jpg";

export const experts = [
  {
    id: 0,
    name: "Demi Wilkinson",
    avatar: ava,
    services: ["Hairstyle", "Manicure"],
    freetime: [
      {
        date: "2025-08-12",
        times: [{ id: 1, label: "12:00" }],
      },
       {
        date: "2025-08-22",
        times: [{ id: 1, label: "15:00" }],
      },
       {
        date: "2025-08-24",
        times: [{ id: 1, label: "12:00" }],
      },
    ],
  },
  {
    id: 1,
    name: "Candice Wu",
    avatar: ava,
    services: ["Hairstyle"],
  },
  {
    id: 2,
    name: "Natali Craig",
    avatar: ava,
    services: ["Massage"],
  },
  {
    id: 3,
    name: "Drew Cano",
    avatar:ava,
    services: ["Manicure"],
  },
  {
    id: 4,
    name: "Orlando Diggs",
    avatar: ava,
    services: ["Hairstyle"],
  },
];
