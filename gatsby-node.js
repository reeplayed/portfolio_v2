// const { createRemoteFileNode } = require('gatsby-source-filesystem');

// exports.createResolvers = ({
//   actions: { createNode },
//   cache,
//   createNodeId,
//   createResolvers,
//   store,
//   reporter,
// }) => {
//   const resolvers = {
//     Portfolio_Asset: {
//       node: {
//         type: `File`,
//         resolve: ({ url }, args, context, info) => {
//           return createRemoteFileNode({
//             url,
//             store,
//             cache,
//             createNode,
//             createNodeId,
//             reporter,
//           });
//         },
//       },
//     },
//   };

//   createResolvers(resolvers);
// };
