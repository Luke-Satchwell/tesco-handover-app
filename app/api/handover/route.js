import Handover from "@/models/handover";
import { connectToDB } from "@/utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const handovers = await Handover.find({}).populate("creator");

    return new Response(JSON.stringify(handovers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all handovers", { status: 500 });
  }
};
