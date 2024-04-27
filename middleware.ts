import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher(
    [
        '/',
        '/previous',
        '/upcoming',
        '/recordings',
        '/personal-room',
        '/meetings(.*)',
    ]
);

export default clerkMiddleware((auth,req)=>{
    if(protectedRoutes(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};