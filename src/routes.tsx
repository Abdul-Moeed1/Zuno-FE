export const routes = [
    {
        path: "/",
        element: <>Home</>
    },
    {
        path: "/login",
        element: <div className="bg-primary text-secondary
         text-3xl">Login</div>
    },
    {
        path: "/signup",
        element: <>sign up</>
    },
    {
        path: "*",
        element: <>Page Not Found</>
    }
]