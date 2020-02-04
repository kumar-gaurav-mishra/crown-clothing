import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createStructuredSelector} from 'reselect';
import {selectDirectoryItems} from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';
import {DirectoryContainer} from './directory.styles';

const Directory = ({sections}) => (
  <DirectoryContainer>
    {sections.map(({id, ...otherValues}) => (
      <MenuItem key={id} {...otherValues} />
    ))}
  </DirectoryContainer>
);
// PropTypes Velidation
Directory.propTypes = {
  sections: PropTypes.array,
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryItems,
});
export default connect(mapStateToProps)(Directory);
