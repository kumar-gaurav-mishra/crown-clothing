import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {MenuItemsContainer, BackgroundImageContainer, Content, Title, Subtitle} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, linkUrl, bgColor, history, match}) => (
  <MenuItemsContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl} bgColor={bgColor} />
    <Content className="content">
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemsContainer>
);
// PropTypes Velidation
MenuItem.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  linkUrl: PropTypes.string,
  bgColor: PropTypes.string,
  history: PropTypes.object,
  match: PropTypes.object,
};
export default withRouter(MenuItem);
