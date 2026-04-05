import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { useTheme } from '../hooks/useTheme';
import { chartData } from '../data/portfolioData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend
);

function fmt$(n) {
  const neg = n < 0;
  const s = '$' + Math.abs(n).toLocaleString('en-US');
  return neg ? '-' + s : s;
}

function useChartColors() {
  const { isDark } = useTheme();
  return useMemo(
    () => ({
      grid: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
      text: isDark ? '#9CA3AF' : '#6b7280',
      accent: '#1D9E75',
      danger: '#EF4444',
      warn: '#F59E0B',
      donutCenter: isDark ? '#fff' : '#111827',
      donutLabel: isDark ? '#9CA3AF' : '#6b7280',
      isDark,
    }),
    [isDark]
  );
}

function getMonthLabels() {
  const labels = [];
  const today = new Date();
  for (let i = 11; i >= 0; i--) {
    const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    labels.push(d.toLocaleString('en-US', { month: 'short' }));
  }
  return labels;
}

ChartJS.defaults.font.family = "'DM Sans', sans-serif";

export function NOIBarChart() {
  const c = useChartColors();
  const data = {
    labels: chartData.noiBar.labels,
    datasets: [
      {
        data: chartData.noiBar.values,
        backgroundColor: chartData.noiBar.values.map((v) => (v >= 0 ? c.accent : c.danger)),
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  };
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => fmt$(ctx.raw) } },
    },
    scales: {
      x: {
        grid: { color: c.grid },
        ticks: { callback: (v) => fmt$(v), font: { size: 10 }, color: c.text },
      },
      y: {
        grid: { display: false },
        ticks: { font: { size: 10 }, color: c.text },
      },
    },
  };
  return (
    <div className="panel">
      <div className="panel-title">NOI by Property</div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export function ExpenseDonut() {
  const c = useChartColors();
  const centerTextPlugin = useMemo(
    () => ({
      id: 'centerText',
      beforeDraw(chart) {
        const cx = (chart.chartArea.left + chart.chartArea.right) / 2;
        const cy = (chart.chartArea.top + chart.chartArea.bottom) / 2;
        const ctx = chart.ctx;
        ctx.save();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = c.donutLabel;
        ctx.font = "500 10px 'DM Sans', sans-serif";
        ctx.fillText('Total', cx, cy - 10);
        ctx.fillStyle = c.donutCenter;
        ctx.font = "700 16px 'DM Sans', sans-serif";
        ctx.fillText(chartData.expenses.total, cx, cy + 8);
        ctx.restore();
      },
    }),
    [c.donutLabel, c.donutCenter]
  );

  const data = {
    labels: chartData.expenses.labels,
    datasets: [
      {
        data: chartData.expenses.values,
        backgroundColor: ['#3B82F6', '#8B5CF6', '#F59E0B', '#1D9E75', '#EC4899'],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 8,
          font: { size: 10 },
          color: c.text,
          usePointStyle: true,
          pointStyleWidth: 8,
        },
      },
      tooltip: {
        callbacks: { label: (ctx) => ctx.label + ': ' + fmt$(ctx.raw) },
      },
    },
  };
  return (
    <div className="panel">
      <div className="panel-title">Expense Breakdown</div>
      <div className="chart-container">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
}

export function NOITrendChart() {
  const c = useChartColors();
  const monthLabels = useMemo(getMonthLabels, []);
  const data = {
    labels: monthLabels,
    datasets: [
      {
        data: chartData.noiTrend,
        borderColor: c.accent,
        backgroundColor: c.isDark ? 'rgba(29,158,117,0.15)' : 'rgba(29,158,117,0.1)',
        fill: true,
        tension: 0.35,
        pointRadius: 2,
        pointBackgroundColor: c.accent,
        pointHoverRadius: 5,
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => fmt$(ctx.raw) } },
    },
    scales: {
      x: {
        grid: { color: c.grid },
        ticks: { font: { size: 9 }, maxRotation: 0, color: c.text },
      },
      y: {
        grid: { color: c.grid },
        ticks: { callback: (v) => fmt$(v), font: { size: 9 }, color: c.text },
        min: 3500,
      },
    },
  };
  return (
    <div className="panel">
      <div className="panel-title">12-Month NOI Trend</div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export function OccupancyBarChart() {
  const c = useChartColors();
  const colors = chartData.occupancy.values.map((v) =>
    v >= 90 ? c.accent : v >= 70 ? c.warn : c.danger
  );
  const data = {
    labels: chartData.occupancy.labels,
    datasets: [
      {
        data: chartData.occupancy.values,
        backgroundColor: colors,
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ctx.raw + '%' } },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 9 }, maxRotation: 45, color: c.text },
      },
      y: {
        grid: { color: c.grid },
        max: 100,
        ticks: { callback: (v) => v + '%', font: { size: 9 }, color: c.text },
      },
    },
  };
  return (
    <div className="panel">
      <div className="panel-title">Occupancy Rate by Property</div>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
