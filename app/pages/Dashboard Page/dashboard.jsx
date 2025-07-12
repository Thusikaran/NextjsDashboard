import SalesChart from '@/app/components/component/SalesChart';
import StatCard from '../../components/component/StatCard';
import ActiveUsersGauge from '@/app/components/component/ActiveUsersGauge';

export default function Dashboard() {
  return (
    <>
      <h1 style={{ fontSize:'1.5rem', marginBottom:'1.5rem' }}>Overview</h1>

      <div style={{ display:'flex', gap:'1.5rem', flexWrap:'wrap' }}>
        <StatCard title="Total Users"  value="1,240" />
        <StatCard title="Active Tasks" value="320" />
        <StatCard title="Unread Msgs"  value="12" />
        <span style={{backgroundColor:'white' ,padding:'10px', width:"500px",display:'flex', justifyContent:"space-around"}}>
            <ActiveUsersGauge percent={68} pathColor="#3b82f6" label="Active Users" />
            <ActiveUsersGauge percent={45} pathColor="#10b981" label="Sales" />
            <ActiveUsersGauge percent={85} pathColor="#f59e0b" label="Engagement" />
        </span>
      </div>
      <SalesChart/>
    </>
  );
}
