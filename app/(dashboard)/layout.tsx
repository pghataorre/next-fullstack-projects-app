import Head from '../head';
import { layoutProps } from '../../types/layoutTypes';
import GlassPane from '../../components/GlassPane';
import '../../styles/global.css';
import Sidebar from '../../components/Sidebar';


const DashboardLayout = ({children, className}: layoutProps): JSX.Element => {
  return(
    <html>
      <Head />
      <body className={`h-screen w-screen rainbow-mesh p-6 ${className}`}>
        <GlassPane className="w-full h-full flex items-center justify-center">
          <Sidebar />
          {children}
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  )
} 

export default DashboardLayout;
