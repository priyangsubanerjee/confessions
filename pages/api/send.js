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

  res.status(200).json({ success: true, message: "Submitted successfully" });
}
