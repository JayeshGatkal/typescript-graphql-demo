import { makeExecutableSchema } from '@graphql-tools/schema';
import Query from './Query';
import Coder from './TypeDefs/Coder';
import Skill from './TypeDefs/Skill';

const generateSchema = (schemaParts: any) =>
  makeExecutableSchema({
    typeDefs: schemaParts.map((part: any) => part.typeDefs),
    resolvers: [...schemaParts.map((part: any) => part.resolvers)],
  });

export default generateSchema([Query, Coder, Skill]);
