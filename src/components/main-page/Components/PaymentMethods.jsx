import { paymentMethods } from "../../../constants";
import PropTypes from 'prop-types';

  function PaymentMethod({ method }) {
    return (
      <div className="items-stretch rounded flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
        <span className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src={method.imageUrl}
            className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
          />
          <div className="self-center text-zinc-900 text-base font-medium leading-6 grow my-auto max-md:max-w-full">
            {method.name}
          </div>
        </span>
        <span className="text-sky-700 text-center text-sm font-medium leading-5 whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--Primary-Blue,#146EB4)] self-center my-auto px-4 py-2 border-solid">
          Set up
        </span>
      </div>
    );
  }

  PaymentMethod.propTypes = {
    method: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  };

  function PaymentMethods() {
    return (
    <div>
       <div className="text-zinc-900 text-base font-medium leading-6 max-md:max-w-full">
          Payment providers
        </div>
        <div className="text-zinc-500 text-sm leading-5 max-md:max-w-full">
          Set up payment providers to accept payments from your customers.
        </div>
       <div>
      {paymentMethods.map((method) => (
          <PaymentMethod key={method.name} method={method} />
        ))}
      </div>
      <div className="items-stretch rounded flex justify-between gap-5 mt-4 max-md:max-w-full max-md:flex-wrap">
      <div className="items-stretch flex justify-between gap-4 max-md:max-w-full max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bc39171791a85a444b23a1983c2f6ea5e45b33d6aa7eea36ec423fdbee65453?apiKey=3c243bff4d854143b1e24c4a3a578c5d&"
          className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full"
        />
        <span className="items-stretch self-center flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
          <div className="text-zinc-900 text-base font-medium leading-6 max-md:max-w-full">
            Cash on delivery
          </div>
          <div className="text-neutral-600 text-sm leading-5 max-md:max-w-full">
            Receive payments in cash upon delivery.
          </div>
        </span>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec14c7c54d2a27eba0ec941d761fac5b0c8729c4bb1cdaf2f205b6b473b6e56c?apiKey=3c243bff4d854143b1e24c4a3a578c5d&"
        className="aspect-[1.64] object-contain object-center w-9 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
      />
    </div>
      </div>
    );
  }

  export default PaymentMethods