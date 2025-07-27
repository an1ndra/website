import { DodoPayments } from "dodopayments";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Initialize Dodo Payments client
    const apiKey = process.env.DODO_PAYMENTS_API_KEY;
    if (!apiKey) {
      throw new Error("DODO Payment API Key is not found");
    }

    console.log(request)
    const body = await request.json();

    const client = new DodoPayments({
      bearer_token: apiKey,
    });

    // Create subscription payment link
    const payment = await client.payments.create({
      payment_link: true,
      billing: {
        city: body.city || "City",
        country: body.country || "US",
        state: body.state || "State",
        street: body.street || "Street",
        zipcode: body.zipcode || "123456",
      },
      customer: {
        email: body.email || "",
        name: body.first_name || "null",
      },
      product_cart: [
        {
          product_id: "pdt_bApAoAvIuimUnaia33cOZ",
          quantity: 1,
        },
      ],
    });

    if (!payment.payment_link) {
      throw new Error("Payment link did not generated");
    }
    // Return the payment link
    return NextResponse.json({
      paymentLink: payment.payment_link,
    });
  } catch (error) {
    console.error("Error creating subscription payment link:", error);
    return NextResponse.json(
      { error: "Failed to create payment link" },
      { status: 500 }
    );
  }
}
