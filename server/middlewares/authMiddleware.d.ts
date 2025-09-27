import type { Request } from "express";
import type { Response } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
export declare const authMiddleware: (req: Request, res: Response, next: Function) => Promise<Response<any, Record<string, any>> | undefined>;
export default authMiddleware;
//# sourceMappingURL=authMiddleware.d.ts.map