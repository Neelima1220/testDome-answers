import * as React from 'react';
import './style.css';
import ImageGallery from './imageGallery';
import GroceryApp from './grocery';

export default function App() {
  const links = ['https://bit.ly/3lmYVna', 'https://bit.ly/3flyaMj'];
  const [data, setData] = React.useState(links);
  return (
    <div>
      {/* <ImageGallery data={data} setData={setData} /> */}
      <GroceryApp
        products={[
          { name: 'Oranges', votes: 0 },
          { name: 'Bananas', votes: 0 },
        ]}
      />
    </div>
  );
}
