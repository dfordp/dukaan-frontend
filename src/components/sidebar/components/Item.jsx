import PropTypes from 'prop-types';

const Item = ({ imageUrl, title, className }) => (
  <div className={`relative ${className}`}>
    <span className="items-stretch rounded flex justify-between gap-3 mt-1 px-4 py-2">
      <img
        loading="lazy"
        src={imageUrl}
        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-white text-sm font-light leading-5 grow whitespace-nowrap">
        {title}
      </div>
    </span>
    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity duration-200 ease-in-out"></div>
  </div>
);

  Item.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
  };

  export default Item;