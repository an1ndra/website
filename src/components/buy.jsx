import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { formData, cartItems } = paymentRequestSchema.parse(body);

    const response = await fetch(
      `${env.NEXT_PUBLIC_DODO_TEST_API}/payments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.NEXT_PUBLIC_DODO_API_KEY}`, // Replace with your API secret key generated from the Dodo Payments Dashboard
        },
        body: JSON.stringify({
          billing: {
            city: formData.city,
            country: formData.country,
            state: formData.state,
            street: formData.addressLine,
            zipcode: parseInt(formData.zipCode),
          },
          customer: {
            email: formData.email,
            name: `${formData.firstName} ${formData.lastName}`,
            phone_number: formData.phoneNumber || undefined,
          },
          payment_link: true,
          product_cart: cartItems.map((id) => ({
            product_id: id,
            quantity: 1,
          })),
          return_url: env.NEXT_PUBLIC_RETURN_URL,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return NextResponse.json(
        { error: "Payment link creation failed", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ paymentLink: data.payment_link });
  } catch (err) {
    console.error("Payment error:", err);
    return NextResponse.json(
      {
        error: err instanceof Error ? err.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}
