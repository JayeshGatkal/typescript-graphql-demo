import { readFileSync } from 'fs';
import { join } from 'path';
import { mutations as skillMutations } from '../TypeDefs/Skill';

const typeDefs = readFileSync(join(__dirname, 'Mutation.graphql')).toString();

export const Mutation = {
  ...skillMutations,
};

const schemaDef = {
  typeDefs,
  resolvers: {
    Mutation: Mutation,
  },
};

export default schemaDef;
