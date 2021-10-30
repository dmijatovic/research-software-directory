import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import GitlabProvider from "next-auth/providers/gitlab"

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
    GitlabProvider({
      clientId: process.env.AUTH_GITLAB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITLAB_CLIENT_SECRET,
    }),
    // ORCID
    {
      id: "orcid",
      name: "ORCID",
      type: "oauth",
      wellKnown: "https://orcid.org/.well-known/openid-configuration",
      authorization: {
        params: {
          scope: "openid"
        }
      },
      idToken: true,
      checks: ["pkce", "state"],
      clientId: process.env.AUTH_ORCID_CLIENT_ID,
      clientSecret: process.env.AUTH_ORCID_CLIENT_SECRET,
      profile(profile) {
        // console.log("ORCID.profile...", profile)
        return {
          id: profile.sub,
          name: `${profile?.given_name} ${profile?.family_name}`,
          email: profile?.email,
          image: profile?.picture,
          orcid: profile.sub
        };
      }
    }
  ],
  pages:{
    signIn:'/login',
    signOut:'/logout'
  }
  // debug:false
})