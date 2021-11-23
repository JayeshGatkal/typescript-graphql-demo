import { readFileSync } from 'fs';
import { join } from 'path';
import skills from '../../../data/skills';

const typeDefs = readFileSync(join(__dirname, 'Coder.graphql')).toString();

const Coder = {
  skills: ({ id }: any, args: any) =>
    skills.filter((skill) => skill.coderId === id),
};

const schemaDef = {
  typeDefs,
  resolvers: {
    Coder: Coder,
  },
};

export default schemaDef;
