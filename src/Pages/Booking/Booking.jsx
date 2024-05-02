import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { url } from "../../utility/url";
import BookingRow from "./BookingRow";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    useEffect(() => {
        fetch(`${url}/bookings?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setBooking(data)
            })

    }, [user?.email]);
    return (
        <div>
            <h2>This is a booking {booking.length}</h2>
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
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                            ></BookingRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Booking;