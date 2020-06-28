import PostController from './../src/controllers/PostController';
export default (server) => {

  // POST ROUTES
  server.get(`/api/post`, PostController.getAll);
  server.post(`/api/post`, PostController.insert);
  server.put(`/api/post/:id`, PostController.update);
  server.delete(`/api/post/:id`, PostController.delete);

};
