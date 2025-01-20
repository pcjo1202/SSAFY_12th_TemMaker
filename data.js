import dotenv from 'dotenv';

dotenv.config();

export const members = process.env.MEMBERS ? JSON.parse(process.env.MEMBERS) : [];
export const TEAM_SIZE = 4;
