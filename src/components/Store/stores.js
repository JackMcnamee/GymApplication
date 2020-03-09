import React from 'react';
import '../../index.css';
import MyStoreItem from './mystoreitem';


class Stores extends React.Component {

  render() {
  return this.props.myStores.map((store) =>
  {
      //console.log(movie);
      return <MyStoreItem store={store}></MyStoreItem>
  })
 
}
   
}
export default Stores;