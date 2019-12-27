using Newtonsoft.Json;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace ForumReactRedux.Models
{
    public class Question
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public string Header { get; set; }
        public string Content { get; set; }

        public string Status { get; set; }
        public  User User { get; set; }

        public  ICollection<Answer> Answers { get; set; }
    }
}
