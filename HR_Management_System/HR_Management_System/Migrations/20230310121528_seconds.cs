using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HR_Management_System.Migrations
{
    /// <inheritdoc />
    public partial class seconds : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Leaves_Employees_EmployeeId",
                table: "Leaves");

            migrationBuilder.RenameColumn(
                name: "EmployeeId",
                table: "Leaves",
                newName: "EmployeeID");

            migrationBuilder.RenameIndex(
                name: "IX_Leaves_EmployeeId",
                table: "Leaves",
                newName: "IX_Leaves_EmployeeID");

            migrationBuilder.AlterColumn<long>(
                name: "EmployeeID",
                table: "Leaves",
                type: "bigint",
                nullable: false,
                defaultValue: 0L,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Leaves_Employees_EmployeeID",
                table: "Leaves",
                column: "EmployeeID",
                principalTable: "Employees",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Leaves_Employees_EmployeeID",
                table: "Leaves");

            migrationBuilder.RenameColumn(
                name: "EmployeeID",
                table: "Leaves",
                newName: "EmployeeId");

            migrationBuilder.RenameIndex(
                name: "IX_Leaves_EmployeeID",
                table: "Leaves",
                newName: "IX_Leaves_EmployeeId");

            migrationBuilder.AlterColumn<long>(
                name: "EmployeeId",
                table: "Leaves",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddForeignKey(
                name: "FK_Leaves_Employees_EmployeeId",
                table: "Leaves",
                column: "EmployeeId",
                principalTable: "Employees",
                principalColumn: "Id");
        }
    }
}
