import clsx from "clsx";
import { layoutProps } from  '../types/layoutTypes';

const GlassPane = ({children, className}: layoutProps): JSX.Element => {
  return <div className={clsx('glass rounded-2xl border-solid border-2 border-gray-200', className)}>
    {children}
  </div>
}

export default GlassPane;
