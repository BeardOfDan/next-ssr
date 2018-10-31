import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <ul>
        {
          props.robots.map((robot) => {
            return (
              <li key={robot.id}>
                <Link href={`robots/${robot.id}`}>
                  <a>{robot.name}</a>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Robots.getInitialProps = async function() {
  return {
    robots: await(await fetch('https://jsonplaceholder.typicode.com/users')).json()
  };
};

export default Robots;
