import Controller from  './Controller';
import Post from  "./../models/Post";
import PostService from  "./../services/PostService";

const postService = new PostService(
    new Post().getInstance()
);

class PostController extends Controller {
  constructor(service) {
    super(service);
  }

}
export default new PostController(postService);
