import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingDetailsTable from "./BookingDetailsTable";

const BookingDetails = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState([]);

  const url = `http://localhost:5000/booking?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
        console.log(data);
      });
  }, []);

  const HandleDelete = (_id) => {
    fetch(`http://localhost:5000/booking/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("service one is deleted");
          const remaining = booking.filter((book) => book._id !== _id);
          setBooking(remaining);
        }
      });
  };


  
  const HandleUpdateBooking = (_id) => {
    fetch(`http://localhost:5000/booking/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = booking.filter(book => book._id !== _id);
          const updated = booking.find(book => book._id === _id);
          updated.status = "confirm";
          const newBooking = [updated, ...remaining];
          setBooking(newBooking)
        }
      });
  };

  return (
    <div className="my-16">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Services</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {booking.map((book) => (
              <BookingDetailsTable
                key={book._id}
                book={book}
                HandleDelete={HandleDelete}
                HandleUpdateBooking={HandleUpdateBooking}
              ></BookingDetailsTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
