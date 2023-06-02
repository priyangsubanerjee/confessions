const sendResponse = (message, ip) => {
  fetch("https://onemail.vercel.app/api/send", {
    method: "POST",
    body: JSON.stringify({
      secret: process.env.NEXT_PUBLIC_ONEMAIL_SECRET,
      subject: "Confession received",
      to: process.env.NEXT_PUBLIC_ONEMAIL_TO,
      html: `
            <div style="font-family: 'Inter', sans-serif;">
              <h1 style="font-size: 1rem; font-weight: 600; color: #374151;">New confession received</h1>
              <p style="font-size: 0.9rem; font-weight: 400; color: #374151;">Someone just confessed to you on <a href="https://confessions.priyangsu.dev" style="color: #3B82F6; text-decoration: none;">confessions.priyangsu.dev</a></p>
              <p style="font-size: 1rem; font-weight: 600; color: #374151;">${message}</p>
              <p style="font-size: 1rem; font-weight: 400; color: #374151;">
               <a href="https://ipapi.co/${ip}/json" style="color: #3B82F6; text-decoration: none;">${ip}</a></p>
              <p style="font-size: 1rem; font-weight: 400; color: #374151;">Have a great day!</p>
              </div>
    `,
    }),
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
  });

  let text = `
      Received a new confession from: ${ip}%0A%0A${message}`;

  let urlString = `${process.env.NEXT_PUBLIC_TELEGRAM_URL}&text=${text}`;
  fetch(urlString, {
    method: "GET",
  });
};

export default sendResponse;
