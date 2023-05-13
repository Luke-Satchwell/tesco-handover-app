import Handover from "@/models/handover";
import { connectToDB } from "@/utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const handover = await Handover.findById(params.id).populate("creator");
    if (!handover) return new Response("Handover Not Found", { status: 404 });

    return new Response(JSON.stringify(handover), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { handover, tag } = await request.json();

  try {
    await connectToDB();

    // Find the existing handover by ID
    const existingHandover = await Handover.findById(params.id);

    if (!existingHandover) {
      return new Response("Handover not found", { status: 404 });
    }

    // Update the handover with new data
    existingHandover.handover = handover;
    existingHandover.tag = tag;

    await existingHandover.save();

    return new Response("Successfully updated the Handover", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Handover", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the handover by ID and remove it
    await Handover.findByIdAndRemove(params.id);

    return new Response("Handover deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting handover", { status: 500 });
  }
};
