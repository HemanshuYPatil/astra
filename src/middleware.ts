import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse,NextRequest } from "next/server";

const isHomeRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth, req) => {
    const { userId } = auth();


    const res = NextResponse.next()
  
    const cookie = req.cookies.get("sessionId")
    
    if (!cookie) {
        res.cookies.set("sessionId", crypto.randomUUID())
    }
    
    return res
    
    // if there is user and home route is accessed, redirect to dashboard or any other protected route
    if (userId && isHomeRoute(req)) {
        return NextResponse.rewrite(new URL("/", req.url));
    }
});


// export function middleware(req: NextRequest) {
//     const res = NextResponse.next()
  
//     const cookie = req.cookies.get("sessionId")
    
//     if (!cookie) {
//         res.cookies.set("sessionId", crypto.randomUUID())
//     }
    
//     return res
// }

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};