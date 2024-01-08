import PropTypes from 'prop-types';
import Item from './Item';

const OverlayItem = ({ imageUrl, title, className }) => (
    <div className={`relative ${className}`}>
      <Item imageUrl={imageUrl} title={title} />
      <div className="absolute inset-0 bg-white opacity-10" />
    </div>
  );
OverlayItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  };



export default OverlayItem;