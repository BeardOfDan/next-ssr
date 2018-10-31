import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>SSR with Next.js</h1>
      <Link href='/about'>
        <button>About</button>
      </Link>
      <span> </span> {/* spacing */}
      <Link href='/robots'>
        <button>Robots</button>
      </Link>
    </div>
  );
};

export default Index;
