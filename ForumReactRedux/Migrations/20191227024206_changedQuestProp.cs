using Microsoft.EntityFrameworkCore.Migrations;

namespace ForumReactRedux.Migrations
{
    public partial class changedQuestProp : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "status",
                table: "Question",
                newName: "Status");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Question",
                newName: "status");
        }
    }
}
