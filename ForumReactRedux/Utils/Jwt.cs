using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace ForumReactRedux.Utils
{
    public class Jwt
    {
        public static int Decode(string tokenStr, string claimStr)
        {
            var tokenTrimed = tokenStr.Substring("Bearer ".Length).Trim();
            var handler = new JwtSecurityTokenHandler();
            var token = handler.ReadToken(tokenTrimed) as JwtSecurityToken;
            System.Console.WriteLine(token.Claims);
            var nameid = token.Claims.First(claim => claim.Type == claimStr).Value;
            return Convert.ToInt32(nameid);
        }
    }
}
