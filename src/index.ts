import express, { Handler } from 'express';
import morgan from 'morgan';
import { graphqlHTTP } from 'express-graphql';
import schema from './Schema';

const PORT = 3002;
const main = async () => {
  const graphqlHandler: Handler = (req, res) =>
    graphqlHTTP({
      schema,
      graphiql: true,
    })(req, res);

  express()
    .use(morgan('combined'))
    .use('/api', graphqlHandler)
    .listen(PORT, () => console.log(`listening on port ${PORT}`));
};

main();
