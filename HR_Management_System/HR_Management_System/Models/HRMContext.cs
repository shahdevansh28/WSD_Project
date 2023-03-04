using Microsoft.EntityFrameworkCore;

namespace HR_Management_System.Models
{
    public class HRMContext:DbContext
    {
        public HRMContext(DbContextOptions<HRMContext> options)
        : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; } = null!;
        public DbSet<Department> Departments  { get; set; } = null!;

        public DbSet<Salary> Salaries { get; set; } = null!;

        public DbSet<Leave> Leaves { get; set; } = null!;
    }
}
