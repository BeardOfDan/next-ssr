import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>SSR with Next.js</h1>
      <Link href='/about'>
        <a>About</a>
      </Link>
    </div>
  );
};

export default Index;
