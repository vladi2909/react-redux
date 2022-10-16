import { useContext } from "react";
import Context from "./Context";

export const ActionCard = ({ number }) => {
  const { count } = useContext(Context);
  
  const handleClick = () => {
    count(number);
  };
  
  return (
    <div className='card'>
      <div>
        купите наши книги:
      </div>
      <div>
        <button onClick={handleClick}>купить {number} книгу</button>
      </div>
    </div>
  );
};