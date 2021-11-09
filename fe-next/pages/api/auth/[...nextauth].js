import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from 'next-auth/providers/azure-ad';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      // async profile(profile, tokens) {
      //   console.log("GoogleProvider...profile...tokens...", JSON.stringify(tokens))
      //   // You can use the tokens, in case you want to fetch more profile information
      //   // For example several OAuth providers do not return email by default.
      //   // Depending on your provider, will have tokens like `access_token`, `id_token` and or `refresh_token`
      //   return {
      //     id: profile.id,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture
      //   }
      // },
    }),
    AzureADProvider({
      // HAS A BUG, see issue https://github.com/nextauthjs/next-auth/issues/3052
      // it requires "openid-client": "^5.0.2",
      // I manually updated node_modules
      clientId: process.env.AUTH_AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AUTH_AZURE_AD_CLIENT_SECRET,
      // When using tenantId it will require MS user to be
      // added to that tenant (possibility to assign roles)
      // tenantId: process.env.AUTH_AZURE_AD_TENANT_ID,
    }),
    // Gitlab is not working properly yet
    // GitlabProvider({
    //   clientId: process.env.AUTH_GITLAB_CLIENT_ID,
    //   clientSecret: process.env.AUTH_GITLAB_CLIENT_SECRET,
    // }),
    // ---------------------------------
    // ORCID oAuth2 + OICD provider
    // ---------------------------------
    {
      id: "orcid",
      name: "ORCID",
      type: "oauth",
      wellKnown: "https://orcid.org/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid email"
        }
      },
      idToken: true,
      checks: ["pkce", "state"],
      clientId: process.env.AUTH_ORCID_CLIENT_ID,
      clientSecret: process.env.AUTH_ORCID_CLIENT_SECRET,
      profile(profile) {
        console.log("nextAuth.provider.ORCID.profile...", profile)
        return {
          ...profile,
          // ID is required by auth-next.client
          // for ORCID we use sub which is base ORCID
          id: profile.sub,
          // we need to construct name
          name: `${profile?.given_name} ${profile?.family_name}`,
          // store orcid incl. website url
          orcid: `${profile?.iss}/${profile?.sub}`
        }
      },
    },
    // ---------------------------------
    // SURFconext oAuth2 + OICD provider
    // ---------------------------------
    {
      id: "surfconext",
      name: "SURFconext",
      type: "oauth",
      wellKnown: "https://connect.test.surfconext.nl/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid profile email"
        }
      },
      idToken: true,
      checks: ["pkce", "state"],
      clientId: process.env.AUTH_SURFCONEXT_CLIENT_ID,
      clientSecret: process.env.AUTH_SURFCONEXT_CLIENT_SECRET,
      profile(profile) {
        console.log("nextAuth.provider.SURFconext.profile...", profile)
        return {
          ...profile,
          // ID is required by auth-next.client
          // for SURFconext we use sub which is base SURFconext
          id: profile.sub,
          // we need to construct name
          name: `${profile?.given_name} ${profile?.family_name}`,
          // store orcid incl. website url
          orcid: `${profile?.iss}/${profile?.sub}`
        }
      }
    }
  ],
  pages:{
    signIn:'/login',
    signOut:'/logout'
  },
  callbacks:{
    /*
      jwt callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated
      (i.e whenever a session is accessed in the client).
      see https://next-auth.js.org/configuration/callbacks#jwt-callback
    */
    async jwt(props) {
      // Note! user seem to be constructed in the profile function of the provider
      const { token, account, user, profile } = props

      console.log("nextAuth.callbacks.jwt...props...", props)
      console.log("nextAuth.callbacks.jwt...token...", token)
      console.log("nextAuth.callbacks.jwt...account...", account)

      // here we need to extract information and store it
      // into new token. This token is used in session
      // method to enrich the session info used on the frontend
      // I'm not sure if this is optimal approach?
      if (account) {
        token.provider = account?.provider
        token.aud = user?.aud ?? profile?.aud ?? null
        token.sub = user?.sub ?? profile?.sub ?? null
        token.orcid = user?.orcid ?? null
        token.idToken = account?.id_token
      }
      return token
    },
    /*
      session callback is called whenever a session is checked.
      By default, only a subset of the token is returned for increased security.
      If you want to make something available you added to the token through the jwt() callback,
      you have to explicitly forward it here to make it available to the client.
      see https://next-auth.js.org/configuration/callbacks#session-callback
    */
    async session(props) {
      const {session,token} = props
      console.log("nextAuth.callbacks.session...props...", props)
      console.log("nextAuth.callbacks.session...session...", session)
      console.log("nextAuth.callbacks.session...token...", token)
      // console.log("nextAuth.callbacks.session...user...", user)
      if (session && session?.user && token){
        session.user = {
          ...session.user,
          name: token?.name,
          orcid: token?.orcid
        }
        session.provider = token?.provider
        session.aud = token?.aud
        session.sub = token?.sub
        // session.idToken = token?.idToken
      }
      // send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken
      return session
    }
  }
  // debug:false
})