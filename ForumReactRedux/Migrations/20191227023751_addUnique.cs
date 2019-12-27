using Microsoft.EntityFrameworkCore.Migrations;

namespace ForumReactRedux.Migrations
{
    public partial class addUnique : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "User",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_User_Login",
                table: "User",
                column: "Login",
                unique: true,
                filter: "[Login] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_User_Login",
                table: "User");

            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "User",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
