"use client";                     
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar
} from 'recharts';

const monthly = [
  { name: 'Jan', sales: 900 },
  { name: 'Feb', sales: 1200 },
  { name: 'Mar', sales: 1050 },
  { name: 'Apr', sales: 1600 },
  { name: 'May', sales: 1480 },
  { name: 'Jun', sales: 1700 }
];

const weekly = [
  { day: 'Mon', users: 140 },
  { day: 'Tue', users: 200 },
  { day: 'Wed', users: 180 },
  { day: 'Thu', users: 220 },
  { day: 'Fri', users: 300 },
  { day: 'Sat', users: 280 },
  { day: 'Sun', users: 190 }
];

export default function SalesChart() {
  return (
    <div style={{ display: 'grid', gap: '2rem',width:'80vw' ,display:'flex', marginTop:'30px'}}>
      <div style={{ background: '#fff', borderRadius: 8, padding: 10, boxShadow: '0 1px 3px rgba(0,0,0,.05)',width:'50%' }}>
        <h3 style={{ marginBottom: 8 }}>Monthly Sales</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={monthly}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar chart */}
      <div style={{ background: '#fff', borderRadius: 8, padding: 10, boxShadow: '0 1px 3px rgba(0,0,0,.05)',width:'50%' }}>
        <h3 style={{ marginBottom: 8 }}>Active Users (Weekly)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weekly}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
