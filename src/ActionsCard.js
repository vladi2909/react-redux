import { ActionCard } from "./ActionCard";

export const ActionsCard = () => {
  return (
    <div className='card-wrap'>
      <ActionCard number={1} />
      <ActionCard number={3} />
      <ActionCard number={5} />
      <ActionCard number={20} />
    </div>
  );
};