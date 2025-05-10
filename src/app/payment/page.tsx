// "use client";

// import SubscriptionForm from "@/components/SubscriptionForm";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// export default function PaymentPage() {
//   interface FormData {
//     city: string;
//     country: string;
//     state: string;
//     street: string;
//     zipcode: string;
//     email: string;
//     first_name: string;
//   }

//   const [formData, setFormData] = useState<FormData>({
//     city: "",
//     country: "",
//     state: "",
//     street: "",
//     zipcode: "",
//     email: "",
//     first_name: "",
//   });

//   const router = useRouter();

//   // Callback function (Getting values from child to parent)
//   const handleFormData = async (data: FormData) => {
//     setFormData(data);

//     try {
//       const res = await axios.post("/api/subscription-link", date);
//       if (res.data.paymentLink) {
//         router.push(res.data.paymentLink);
//       } else {
//         throw new Error("Payment link not found in response");
//       }
//     } catch (err: unknown) {
//       throw new Error(err);
//     }
//   };

//   return (
//     <>
//       <div>
//         <SubscriptionForm formValue={handleFormData} />
//       </div>
//     </>
//   );
// }
