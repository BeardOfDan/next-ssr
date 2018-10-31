import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </div>
  );
};

export default About;
