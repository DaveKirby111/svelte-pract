import { comments } from "$lib/comments.js";
import { json } from "@sveltejs/kit";

export function GET(requestEvent) {
  const { params } = requestEvent;
  const { commentid } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentid)
  );
  return json(comment);
}

export async function PATCH(requestEvent) {
  const { params, request } = requestEvent;
  const { commentid } = params;
  const { body } = await request.json();
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentid)
  );
  comment.body = body;
  return json(comment);
}

export async function DELETE(requestEvent) {
  const { params } = requestEvent;
  const { commentid } = params;
  const deletedcomment = comments.find(
    (comment) => comment.id === parseInt(commentid)
  );
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(commentid)
  );
  comments.splice(index, 1);
  return json(deletedcomment);
}
