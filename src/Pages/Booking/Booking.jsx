import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Booking = () => {
  const service = useLoaderData();

  const { user } = useContext(AuthContext);
  const { _id, title, img, price, service_id ,status} = service;
  const handleSubmitBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      name: name,
      email,
      date,
      service: title,
      service_id: _id,
      price,
      img,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.insertedId) {
            
            
        // }
      });

    console.log(booking);

  
  };
  return (
    <div className="hero my-16 bg-base-200">
      <div className="card  w-full shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center my-5">Login now!</h1>
          <form onSubmit={handleSubmitBook}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due to Amount</span>
                </label>
                <input
                  type="text"
                  name="amout"
                  defaultValue={"$" + price}
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control my-16">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Order Confirm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
