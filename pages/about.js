import Link from 'next/link';

const style = { fontSize: '20px', color: 'blue' };

const About = () => {
  return (
    <div style={style}>
      <h1>About Page</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <p>This site has server side rendering</p>
    </div>
  );
};

export default About;
