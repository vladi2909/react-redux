import { useContext } from "react";
import Context from './Context';

export const StatusCard = () => {
  const { counter } = useContext(Context);

  return (
    <div className='card'>
      <div>
        <span>total</span>
      </div>
      <div>
        <p>total buy {counter} books</p>
      </div>
    </div>
  );
};