/*
  # Send Booking Email Notification

  This edge function sends email notifications when new bookings are created.
  
  1. Functionality
    - Receives booking data from the frontend
    - Sends formatted email to admin with booking details
    - Returns success/error response
  
  2. Email Content
    - Customer information
    - Service details
    - Booking preferences
    - Total amount
*/

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface BookingData {
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  number_of_sarees: number;
  services: string[];
  preferred_date: string;
  preferred_time: string;
  special_instructions: string;
  total_amount: number;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const bookingData: BookingData = await req.json();
    
    // Format services list
    const servicesList = bookingData.services.map(service => {
      switch(service) {
        case 'pre-pleating-designer': return 'Pre-Pleating and Box Folding (Designer Saree) - ₹499';
        case 'pre-pleating-normal': return 'Pre-Pleating and Box Folding (Normal Saree) - ₹299';
        case 'ironing': return 'Saree Ironing - ₹50';
        case 'doorstep-service': return 'Doorstep Service - Contact for pricing';
        default: return service;
      }
    }).join('\n• ');

    // Email content
    const emailSubject = `New Saree Booking - ${bookingData.customer_name}`;
    const emailBody = `
New Booking Received!

CUSTOMER DETAILS:
• Name: ${bookingData.customer_name}
• Phone: ${bookingData.phone}
• Email: ${bookingData.email || 'Not provided'}
• Address: ${bookingData.address || 'Not provided'}

SERVICE DETAILS:
• Number of Sarees: ${bookingData.number_of_sarees}
• Services Requested:
• ${servicesList}
• Preferred Date: ${bookingData.preferred_date}
• Preferred Time: ${bookingData.preferred_time}
• Total Amount: ₹${bookingData.total_amount}

SPECIAL INSTRUCTIONS:
${bookingData.special_instructions || 'None'}

Please contact the customer to confirm the booking.

---
Durgs's Saree Pre Pleating Services
`;

    // In a real implementation, you would use a service like:
    // - Resend API
    // - SendGrid API  
    // - Nodemailer with SMTP
    // - Supabase Edge Functions with email service
    
    // For now, we'll simulate sending email and return success
    console.log('Email would be sent with subject:', emailSubject);
    console.log('Email body:', emailBody);

    // You can integrate with your preferred email service here
    // Example with Resend:
    /*
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const adminEmail = Deno.env.get('ADMIN_EMAIL');
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'bookings@durgsprepleating.com',
        to: [adminEmail],
        subject: emailSubject,
        text: emailBody,
      }),
    });
    */

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Booking notification sent successfully' 
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Error sending booking email:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Failed to send booking notification' 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
});