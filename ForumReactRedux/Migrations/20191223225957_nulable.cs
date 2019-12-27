using Microsoft.EntityFrameworkCore.Migrations;

namespace ForumReactRedux.Migrations
{
    public partial class nulable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "QuestionId",
                table: "Answer",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "QuestionId",
                table: "Answer",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);
        }
    }
}
