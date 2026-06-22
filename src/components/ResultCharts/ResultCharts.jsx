import { LineChart, Line, XAxis, YAxis } from "recharts";
  const resultData = [
    
  {
    roll: 101,
    name: "Rahim",
    subjects: {
      Math: 85,
      English: 78,
      Physics: 90
    }
  },
  {
    roll: 102,
    name: "Karim",
    subjects: {
      Math: 92,
      English: 88,
      Physics: 84
    }
  },
  {
    roll: 103,
    name: "Sakib",
    subjects: {
      Math: 76,
      English: 81,
      Physics: 79
    }
  },
  {
    roll: 104,
    name: "Tamim",
    subjects: {
      Math: 89,
      English: 85,
      Physics: 91
    }
  },
  {
    roll: 105,
    name: "Fahim",
    subjects: {
      Math: 68,
      English: 72,
      Physics: 75
    }
  },
  {
    roll: 106,
    name: "Nafis",
    subjects: {
      Math: 95,
      English: 90,
      Physics: 93
    }
  },
  {
    roll: 107,
    name: "Rifat",
    subjects: {
      Math: 80,
      English: 77,
      Physics: 82
    }
  },
  {
    roll: 108,
    name: "Hasan",
    subjects: {
      Math: 87,
      English: 84,
      Physics: 88
    }
  },
  {
    roll: 109,
    name: "Nayeem",
    subjects: {
      Math: 91,
      English: 86,
      Physics: 89
    }
  },
  {
    roll: 110,
    name: "Jahid",
    subjects: {
      Math: 74,
      English: 79,
      Physics: 77
    }
  }
];
  
const ResultCharts = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={resultData}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="subjects.Math" />
      <Line type="monotone" dataKey="subjects.Physics" stroke="green"> </Line>
    </LineChart>
  );
};

export default ResultCharts;