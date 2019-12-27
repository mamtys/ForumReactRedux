using Microsoft.EntityFrameworkCore.Migrations;

namespace ForumReactRedux.Migrations
{
    public partial class addStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "status",
                table: "Question",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Question",
                keyColumn: "Id",
                keyValue: 1,
                column: "status",
                value: "active");

            migrationBuilder.UpdateData(
                table: "Question",
                keyColumn: "Id",
                keyValue: 2,
                column: "status",
                value: "active");

            migrationBuilder.UpdateData(
                table: "Question",
                keyColumn: "Id",
                keyValue: 3,
                column: "status",
                value: "active");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "status",
                table: "Question");
        }
    }
}
