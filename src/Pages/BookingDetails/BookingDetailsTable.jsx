const BookingDetailsTable = ({ book,HandleDelete,HandleUpdateBooking }) => {
  const { _id, name, img, price, service, date,status } = book;
  console.log(book);






  return (
    <tr>
      <th>
        <label>
          <button onClick={()=>HandleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>

      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-32 h-32">
              <img src={img} />
            </div>
          </div>
        </div>
      </td>

      <td>
        <h2 className="text-2xl">{service}</h2>
      </td>

      <td>Price : ${price}</td>
      <td>{date}</td>

      <th>
        {
          status==="confirm" ? <span className="text-primary font-bold">confirmed</span>:
          
          <button onClick={()=>HandleUpdateBooking(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
      </th>
    </tr>
  );
};

export default BookingDetailsTable;
