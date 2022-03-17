import React from 'react';
import MenuItem from '../menu-items/menu-items.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          size: 'large'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          size: 'large'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          size: 'large'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          size: 'large'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          size: 'large'
        }
      ]
    };

  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({id, title, imageUrl, size}) => (
           <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    )
  }
}

export default Directory;