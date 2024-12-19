import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  TooltipItem,
  ChartType,
} from "chart.js";

import { categoryApi } from "../../api/category";

import styles from "./rating-page.style.module.css";
import { groupsName } from "../../provider/CategoryProvider";
import { CategoryContextType } from "../../types/Category";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const RatingPage = () => {
  // ---------------------------------------------------------------------------
  // variables
  // ---------------------------------------------------------------------------

  const [allCategory, setAllCategory] = useState<CategoryContextType[]>([]);

  const data = useMemo(
    () => ({
      labels: allCategory.map((category) =>
        new Date(category ? +`${category.date}` : "").toLocaleDateString()
      ),
      datasets: [
        {
          label: "Dataset 1",
          data: allCategory.map((category) => {
            return groupsName.reduce(
              (prev, value) => prev + +!!+category[value],
              0
            );
          }),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    }),
    [allCategory]
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: (tooltipItem: TooltipItem<ChartType>) => {
            const { dataIndex } = tooltipItem;
            const hoveredDay = allCategory[dataIndex];

            return [
              `Group 1:  ${hoveredDay.group1}`,
              `Group 2:  ${hoveredDay.group2}`,
              `Group 3:  ${hoveredDay.group3}`,
              `Group 4:  ${hoveredDay.group4}`,
              `Group 5:  ${hoveredDay.group5}`,
              `Group 6:  ${hoveredDay.group6}`,
              `Group 7:  ${hoveredDay.group7}`,
              `Group 8:  ${hoveredDay.group8}`,
              `Group 9:  ${hoveredDay.group9}`,
              `Group 10:  ${hoveredDay.group10}`,
              // `Group 11:  ${hoveredDay.group11}`,
              // `Group 12:  ${hoveredDay.group12}`,
              // `Group 13:  ${hoveredDay.group13}`,
            ];
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 13,
        min: 0,
      },
    },
  };

  // ---------------------------------------------------------------------------
  // effects
  // ---------------------------------------------------------------------------

  useEffect(() => {
    getCategory();
  }, []);

  // ---------------------------------------------------------------------------
  // function
  // ---------------------------------------------------------------------------

  async function getCategory() {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const data = await categoryApi.getCategory(user.id);

    setAllCategory(data || []);
  }
  // ---------------------------------------------------------------------------
  return (
    <div className={styles.wrapper}>
      <Line options={options} data={data} />
    </div>
  );
};
