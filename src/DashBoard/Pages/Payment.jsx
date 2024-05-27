import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFrom from "../Components/CheckoutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_PK)
const Payment = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <h1 className="text-2xl mt-10">PAYMENT</h1>
            <div className="w-96 mt-52">
                <Elements stripe={stripePromise}>
                    <CheckoutFrom></CheckoutFrom>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;