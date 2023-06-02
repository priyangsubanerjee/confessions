import connectDatabase from "@/db/connect";

export default async function send(req, res) {
  await connectDatabase();
}
