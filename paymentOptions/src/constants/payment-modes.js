export const paymentModes = [
  {
    id: 0,
    title: "Skrill",
    subTitle: "Processed in less than a minute",
    logo: "http://localhost:4001/public/images/Capture2.PNG",
    fields: [],
  },
  {
    id: 1,
    title: "Debit/Credit",
    subTitle: "Fastest way to fund your account",
    logo: "http://localhost:4001/public/images/debit.PNG",
    fields: [
      {
        id: "f1",
        type: "input",
        placeholder: "Card no...",
      },
      {
        id: "f2",
        type: "input",
        placeholder: "CCV",
      },
    ],
  },
  {
    id: 2,
    title: "Neteller",
    subTitle: "Processed in less than a minute",
    logo: "http://localhost:4001/public/images/netter.PNG",
    fields: [
      {
        id: "f1",
        type: "input",
        placeholder: "Card no...",
      },
      {
        id: "f2",
        type: "input",
        placeholder: "Another field",
      },
      {
        id: "f3",
        type: "input",
        placeholder: "CCV",
      },
    ],
  },
  {
    id: 3,
    title: "Bank Transfer",
    subTitle:
      "Transfer directly from your bank using our account details. Typically takes 1-2 days",
    logo: "http://localhost:4001/public/images/bank-transfer.PNG",
    fields: [
      {
        id: "f1",
        type: "input",
        placeholder: "Account Number",
      },
    ],
  },
];
