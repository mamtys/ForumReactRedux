using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ForumReactRedux.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace ForumReactRedux.Data
{
    public class ForumReactReduxContext : IdentityDbContext
    {
        public ForumReactReduxContext (DbContextOptions<ForumReactReduxContext> options)
            : base(options)
        {
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

             modelBuilder.Entity<User>()
                .HasIndex(u => u.Login)
                .IsUnique();

            modelBuilder.Entity<Question>()
                .HasOne<User>(q => q.User)
                .WithMany(u => u.Questions)
                .HasForeignKey(q => q.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Answer>()
                .HasOne<User>(a => a.User)
                .WithMany(u => u.Answers)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Answer>()
               .HasOne<Question>(a => a.Question)
               .WithMany(q => q.Answers)
               .HasForeignKey(a => a.QuestionId)
               .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<User>()
                .HasData(
                new User[]
                {
                    new User { Id=1, Login="Tom", Password="q"},
                    new User { Id=2, Login="Alice", Password="q"},
                    new User { Id=3, Login="Sam", Password="q"}
                });

            modelBuilder.Entity<Question>().HasData(
               new Question[]
               {
                    new Question { Id=1, Header="Tom", Status = "active", Content="q", UserId=1},
                    new Question { Id=2, Header="Alice", Status = "active", Content="q", UserId=1},
                    new Question { Id=3, Header="Sam", Status = "active",  Content="q", UserId=1}
               });

            modelBuilder.Entity<Answer>().HasData(
               new Answer[]
               {
                    new Answer { Id=1, QuestionId=1, Content="q", UserId=1},
                    new Answer { Id=2, QuestionId=1, Content="q", UserId=1},
                    new Answer { Id=3, QuestionId=1, Content="q", UserId=1}
               });

        }

        public DbSet<ForumReactRedux.Models.User> User { get; set; }
        public DbSet<ForumReactRedux.Models.Question> Question { get; set; }
        public DbSet<ForumReactRedux.Models.Answer> Answer { get; set; }
    }
}
