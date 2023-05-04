import { layoutProps } from "../types/layoutTypes";

const Card = ({ className, children }: layoutProps): JSX.Element => {
  return (
    <div
      className={`rounded-3xl px-10 py-4 drop-shadow-xl bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
