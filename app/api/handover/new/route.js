import Handover from "@/models/handover";
import { connectToDB } from "@/utils/database";

export const POST = async (request) => {
  const { userId, handover, tag } = await request.json();

  try {
    await connectToDB();
    const newHandover = new Handover({ creator: userId, handover, tag });

    await newHandover.save();
    return new Response(JSON.stringify(newHandover), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new handover", { status: 500 });
  }
};
