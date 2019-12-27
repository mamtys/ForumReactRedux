using Newtonsoft.Json;
using System;

namespace ForumReactRedux.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int? QuestionId { get; set; }
        public string Content { get; set; }

        public User User { get; set; }

        public  Question Question { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
