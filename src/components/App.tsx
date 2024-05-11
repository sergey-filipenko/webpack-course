import React from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import Progress from '@/assets/progress.svg';

const TODO2 = () => {
  throw new Error('TODO2');
};
const TODO = () => {
  TODO2();
};
export const App = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    TODO();
    setCount(count + 1);
  };
  return (
    <div data-testid='AppDataTestId'>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt='333' />
        <img width={100} height={100} src={avatarJpg} alt='' />
      </div>
      <div>
        <Progress width={1000} height={600} />
      </div>
      <Link to='/about'>eeee</Link>
      <br />
      <Link to='/shop'>Shop</Link>
      <br />
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>Add</span>
      </button>
      <Outlet />
    </div>
  );
};
