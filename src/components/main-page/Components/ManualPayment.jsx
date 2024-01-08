const ManualPayment = () => {
  return (
    <div className="items-stretch bg-white self-center flex w-[760px] max-w-full flex-col justify-center mt-6 p-6 max-md:px-5">
      <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <span className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-zinc-900 text-base font-medium leading-6 max-md:max-w-full">
            Manual payment methods
          </div>
          <div className="text-zinc-500 text-sm leading-5 max-md:max-w-full">
            Payments that are made outside online store. Allows you to accept
            cash, check or other custom forms of payment.
          </div>
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aefa12f6814f13824f099370b0cf285b63bbda4cdc130ab20b9e88454c131e35?apiKey=3c243bff4d854143b1e24c4a3a578c5d&"
          className="aspect-[1.64] object-contain object-center w-9 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
        />
      </div>
    </div>
  )
}

export default ManualPayment
