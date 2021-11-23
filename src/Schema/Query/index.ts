import { readFileSync } from 'fs';
import { join } from 'path';
import coders from '../../data/coders';
import skills from '../../data/skills';

const typeDefs = readFileSync(join(__dirname, 'Query.graphql')).toString();

export const Query = {
  coders: (parent: any, args: any) => coders,
  coder: (parent: any, { id }: any) => coders.find((coder) => coder.id === id),
  codersBySkill: (parent: any, { language }: any) => {
    const skill = skills.filter((skill) => skill.language === language);
    return coders.filter((coder) => skill.some((s) => s.coderId === coder.id));
  },
  skills: (parent: any, args: any) => skills,
  skill: (parent: any, { id }: any) => skills.find((skill) => skill.id === id),
};

const schemaDef = {
  typeDefs,
  resolvers: {
    Query: Query,
  },
};

export default schemaDef;
