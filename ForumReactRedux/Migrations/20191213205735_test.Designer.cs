﻿// <auto-generated />
using ForumReactRedux.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ForumReactRedux.Migrations
{
    [DbContext(typeof(ForumReactReduxContext))]
    [Migration("20191213205735_test")]
    partial class test
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ForumReactRedux.Models.Answer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<int>("QuestionId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("QuestionId");

                    b.HasIndex("UserId");

                    b.ToTable("Answer");

                    b.HasData(
                        new { Id = 1, Content = "q", QuestionId = 1, UserId = 1 },
                        new { Id = 2, Content = "q", QuestionId = 1, UserId = 1 },
                        new { Id = 3, Content = "q", QuestionId = 1, UserId = 1 }
                    );
                });

            modelBuilder.Entity("ForumReactRedux.Models.Question", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content");

                    b.Property<string>("Header");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Question");

                    b.HasData(
                        new { Id = 1, Content = "q", Header = "Tom", UserId = 1 },
                        new { Id = 2, Content = "q", Header = "Alice", UserId = 1 },
                        new { Id = 3, Content = "q", Header = "Sam", UserId = 1 }
                    );
                });

            modelBuilder.Entity("ForumReactRedux.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Login");

                    b.Property<string>("Password");

                    b.HasKey("Id");

                    b.ToTable("User");

                    b.HasData(
                        new { Id = 1, Login = "Tom", Password = "q" },
                        new { Id = 2, Login = "Alice", Password = "q" },
                        new { Id = 3, Login = "Sam", Password = "q" }
                    );
                });

            modelBuilder.Entity("ForumReactRedux.Models.Answer", b =>
                {
                    b.HasOne("ForumReactRedux.Models.Question", "Question")
                        .WithMany("Answers")
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("ForumReactRedux.Models.User", "User")
                        .WithMany("Answers")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("ForumReactRedux.Models.Question", b =>
                {
                    b.HasOne("ForumReactRedux.Models.User", "User")
                        .WithMany("Questions")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}
