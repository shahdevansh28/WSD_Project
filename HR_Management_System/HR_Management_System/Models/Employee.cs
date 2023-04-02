using System.ComponentModel.DataAnnotations;

namespace HR_Management_System.Models
{
    public class Employee
    {
        public long Id { get; set; }
        [Required]
        public string? Username { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        [Required]
        public string?  Name { get; set; }
        [Required]
        public DateTime DOB { get; set; }
        [Required]
        public string? Phone { get; set; }
        [Required]
        public string? Address { get; set; }
        [Required]
        public DateTime Join_Date { get; set; }
        [Required]
        public string? Gender { get; set; }
            
        public long DepartmentId { get; set; }
        public Department? Department { get; set; }
    }
}