import { createPost } from "../../../controllers/post";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      await createPost(req);
    } catch (error) {
      return res
        .status(error.status || 500)
        .json({ success: false, message: error.message });
    }
  }
};

export default handler;
