using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace ForumReactRedux.Auth
{
    public class JwtAuthentication : AuthorizeAttribute
    {
        public object ClientAuthorize { get; private set; }
        public object JwtAuthenticationHandler { get; private set; }

       // protected override bool IsAuthorized(HttpActionContext actionContext)
       // {
        //    var authHeader = actionContext.Request.Headers.Authorization;
           // if (authHeader != null && !String.IsNullOrWhiteSpace(authHeader.Parameter))
            //    System.Threading.Thread.CurrentPrincipal = JwtAuthenticationHandler.GetPrincipal(authHeader.Parameter);
           // return ClientAuthorize.Authorize(Roles);
      //  }
    }
}
