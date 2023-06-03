import confession from "@/db/confession";
import connectDatabase from "@/db/connect";

export default async function send(req, res) {
  await connectDatabase();
  const body = JSON.parse(req.body);
  const { message, ip } = body;

  await confession.create({
    message,
    ip,
  });

  let text = `
        Received a new confession%0A%0A${message}`;

  let urlString = `${process.env.TELEGRAM_URL}&text=${text}`;
  await fetch(urlString, {
    method: "GET",
  });

  res.status(200).json({ success: true, message: "Submitted successfully" });
}
