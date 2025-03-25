// pages/index.js

// runs on server

import { ContinueButton, LoggedIn, LoggedOut, HelloProvider, UpdateProfileButton, logOut } from "@hellocoop/nextjs/react"

export default function Home({auth}) {  
    return (
      <HelloProvider auth={auth}>
        <div className="grid">
          <LoggedIn>
            <pre>
              {JSON.stringify(auth,null,2)}
            </pre>
            <UpdateProfileButton/>
            <button onClick={logOut}>Log out</button>
          </LoggedIn>
          <LoggedOut>
            <ContinueButton/>
          </LoggedOut>
        </div>
      </HelloProvider>
    )
}

// server-side fn that retrieves auth data from cookie
export { getServerSideProps } from "@hellocoop/nextjs" 

// ./app/page.js

// runs on client

// import { ContinueButton, LoggedIn, LoggedOut, useAuth, UpdateProfileButton, logOut } from "@hellocoop/nextjs/react"

// export default function Home() {  
//     const { auth } = useAuth() // client-side react hook that fetches /hellocoop?op=auth
//     return (
//       <div className="grid">
//         <LoggedIn>
//           <pre>
//             {JSON.stringify(auth,null,2)}
//           </pre>
//           <UpdateProfileButton/>
//           <button onClick={logOut}>Log out</button>
//         </LoggedIn>
//         <LoggedOut>
//           <ContinueButton/>
//         </LoggedOut>
//       </div>
//     )
// }
