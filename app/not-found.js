import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>404 - Not Found</h1>
      <p>The page you’re looking for doesn't exist.</p>
      <Link href="/" style={{ marginTop: '1rem', display: 'inline-block', color: 'blue' }}>
        ← Go back home
      </Link>
    </div>
  );
}
