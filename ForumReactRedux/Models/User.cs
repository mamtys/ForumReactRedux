using Newtonsoft.Json;
using System.Collections.Generic;

using System.Runtime.Serialization;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace ForumReactRedux.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public ICollection<Question> Questions { get; set; }
        [JsonIgnore]
        [IgnoreDataMember]
        public ICollection<Answer> Answers { get; set; }
        
    }
}
