import Post from "../models/Post";
import AppError from "../utils/AppError";

export const createPost = async (req) => {
  const post = await Post.create(req.body).populate("author", "username");

  if (!post) {
    throw AppError(
      500,
      "Gönderi oluşturulurken bir hatayla karşılaşıldı. Lütfen daha sonra tekrar deneyiniz."
    );
  }
}
