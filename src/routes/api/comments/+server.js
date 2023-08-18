import { json } from "@sveltejs/kit";
import { comments } from "$lib/comments";

export function GET() {
  return json(comments);
}

export async function POST(requestEvent) {
  const { request } = requestEvent;
  const { body } = await request.json();
  const newComment = {
    id: comments.length + 1,
    body,
  };
  comments.push(newComment);
  return json(newComment, { status: 201 });
}
