import { readFileSync } from 'fs';
import { join } from 'path';
import coders from '../../../data/coders';

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

export default schemaDef;
