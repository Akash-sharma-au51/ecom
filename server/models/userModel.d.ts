import mongoose from "mongoose";
declare const User: mongoose.Model<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}, {}, mongoose.DefaultSchemaOptions> & {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default User;
//# sourceMappingURL=userModel.d.ts.map