import Link from 'next/link';
import getData from '../../lib/getData';
import '../../styles/globals.css'

export default async function Page() {
  const data = await getData();
  return (
    <div>
      <Link href="/breaking">navigate to breaking</Link>
      <p>
        {data.fact}
      </p>
    </div>
  );
}