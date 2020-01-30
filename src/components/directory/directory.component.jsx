import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryItems } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import './directory.style.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherValues }) => (
      <MenuItem key={id} {...otherValues} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems
});
export default connect(mapStateToProps)(Directory);
