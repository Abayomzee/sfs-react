const investments = [
  {
    id: 1,
    investmentName: "SFS Fixed Income Fund",
    investmentImage: "",
    investmentMinAmout: "15,000.00",
    investmentMaxAmout: "355,000.00",
    interestRate: "16%",
    investmentDescription:
      "Full investment plan description, The Company currently operates in 25 states in Nigeria including the Federal Capital Territory– Abuja. With a staff strength . Our team of highly qualified Investment Banking professionals has an enviable repertoire of regulatory and policy knowledge gained through year of strong deal experience.",
  },
  {
    id: 2,
    investmentName: "Skype Shelter Fund ",
    investmentImage: "",
    investmentMinAmout: "35,000.00",
    investmentMaxAmout: "155,000.00",
    interestRate: "14%",
    investmentDescription:
      "Full investment plan description, The Company currently operates in 25 states in Nigeria including the Federal Capital Territory– Abuja. With a staff strength . Our team of highly qualified Investment Banking professionals has an enviable repertoire of regulatory and policy knowledge gained through year of strong deal experience.",
  },
  {
    id: 3,
    investmentName: "Abayomzee Funds",
    investmentImage: "",
    investmentMinAmout: "5,000.00",
    investmentMaxAmout: "655,000.00",
    interestRate: "63%",
    investmentDescription:
      "Full investment plan description, The Company currently operates in 25 states in Nigeria including the Federal Capital Territory– Abuja. With a staff strength . Our team of highly qualified Investment Banking professionals has an enviable repertoire of regulatory and policy knowledge gained through year of strong deal experience.",
  },
  {
    id: 4,
    investmentName: "Amazing Funds Capital",
    investmentImage: "",
    investmentMinAmout: "85,000.00",
    investmentMaxAmout: "285,000.00",
    interestRate: "23%",
    investmentDescription:
      "Full investment plan description, The Company currently operates in 25 states in Nigeria including the Federal Capital Territory– Abuja. With a staff strength . Our team of highly qualified Investment Banking professionals has an enviable repertoire of regulatory and policy knowledge gained through year of strong deal experience.",
  },
];

// get an investment
export function getInvestment(investmentId) {
  return investments.find((inv) => inv.id === investmentId);
}

// get all investment
export function getInvestments() {
  return investments;
}
// delete investment
// export function delete
//
