"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@/components/Form";

const UpdateHandover = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const handoverId = searchParams.get("id");

  const [post, setPost] = useState({ handover: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getHandoverDetails = async () => {
      const response = await fetch(`/api/handover/${handoverId}`);
      const data = await response.json();

      setPost({
        handover: data.handover,
        tag: data.tag,
      });
    };

    if (handoverId) getHandoverDetails();
  }, [handoverId]);

  const updateHandover = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!handoverId) return alert("Missing HandoverId!");

    try {
      const response = await fetch(`/api/handover/${handoverId}`, {
        method: "PATCH",
        body: JSON.stringify({
          handover: post.handover,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateHandover}
    />
  );
};

export default UpdateHandover;
