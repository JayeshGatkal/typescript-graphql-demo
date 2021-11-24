import skills from '../../../data/skills';

export const createSkill = (parent: any, { skill }: any) => {
  skills.push(skill);
  return skills;
};
