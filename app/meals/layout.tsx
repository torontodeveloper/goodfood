import { ReactNode } from "react";

type MealsProps = {
  children: ReactNode;
};

const MealsLayout = ({ children }: MealsProps): React.JSX.Element => {
  return (
    <div>
      <h2>Meals Layout********</h2>
      {children}
    </div>
  );
};
export default MealsLayout;
