import ava from "./../../../assets/Experts/2ddd34475af2616515a851c20c1c5b00b37fa5f2.jpg";

export const experts = [
  {
    id: 1,
    name: "Demi Wilkinson",
    avatar: ava,
    services: ["Hairstyle", "Manicure"],
    freetime: [
      {
        date: "2025-08-12",
        times: [{ id: 1, label: "12:00" }],
      },
       {
        date: "2025-08-13",
        times: [{ id: 1, label: "12:00" }],
      },
    ],
  },
  {
    id: 2,
    name: "Candice Wu",
    avatar: "/avatars/candice.jpg",
    services: ["Hairstyle"],
  },
  {
    id: 3,
    name: "Natali Craig",
    avatar: "/avatars/natali.jpg",
    services: ["Massage"],
  },
  {
    id: 4,
    name: "Drew Cano",
    avatar: "/avatars/drew.jpg",
    services: ["Manicure"],
  },
  {
    id: 5,
    name: "Orlando Diggs",
    avatar: "/avatars/orlando.jpg",
    services: ["Hairstyle"],
  },
];
