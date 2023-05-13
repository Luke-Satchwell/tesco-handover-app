import Handover from "@/models/handover";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const handovers = await Handover.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(handovers), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch handovers created by user", {
      status: 500,
    });
  }
};
