import { readFileSync } from 'fs';
import { join } from 'path';
import coders from '../../../data/coders';
import * as skilMutations from './mutations'

const typeDefs = readFileSync(join(__dirname, 'Skill.graphql')).toString();

const Skill = {
  coder: ({ coderId }: any, args: any) =>
    coders.find((coder) => coder.id === coderId),
};

const schemaDef = {
  typeDefs,
  resolvers: {
    Skill: Skill,
  },
};

export const mutations = skilMutations;

export default schemaDef;
