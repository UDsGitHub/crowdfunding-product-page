import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    title: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    left: 101,
  },
  {
    id: uuidv4(),
    title: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 64,
  },
  {
    id: uuidv4(),
    title: "Mahogany Special Edition",
    pledge: "Pledge $200 or more",
    desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    left: 0,
  },
];
