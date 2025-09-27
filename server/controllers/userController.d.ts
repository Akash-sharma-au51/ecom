import type { Request, Response } from "express";
declare const registerUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const logoutUser: (req: Request, res: Response) => void;
export { loginUser, logoutUser, registerUser };
//# sourceMappingURL=userController.d.ts.map