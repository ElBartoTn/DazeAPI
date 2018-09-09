import { ResolverlMap } from "./types/graphql.utils";
import {GQL} from "./types/schema";
import *  as bcrypt from "bcryptjs";
import { User } from "./Model/User";
export const resolvers: ResolverlMap = {
    Query: {
      hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || 'World'}`,
    },
    Mutation: {
      register: async (_,{mail,password}: GQL.IRegisterOnMutationArguments) => {
        const hashedPassword = await bcrypt.hash(password, 10);
       const user = await User.create({
          mail,
          password : hashedPassword,
        });
        await user.save();
        return true;
      }
    },
  };
  