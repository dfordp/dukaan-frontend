import PropTypes from 'prop-types';

const Item = ({ imageUrl, title, className }) => (
  <span className={`items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2 max-md:pr-5 ${className}`}>
    <img
      loading="lazy"
      src={imageUrl}
      className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
    />
    <div className="text-white text-sm font-medium leading-5 grow whitespace-nowrap">
      {title}
    </div>
  </span>
);

  Item.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  };

  export default Item;