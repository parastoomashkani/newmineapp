import React, { FC} from 'react';
import FormList from './form';
import './style.css'
interface pageProps {
}
const page: FC<pageProps> = ({ }) => {
    return (
      <main>
      <FormList />
      </main>
    );
  };
  export default page 