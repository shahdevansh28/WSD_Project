using System.ComponentModel.DataAnnotations;

namespace HR_Management_System.Models
{
    public class Leave
    {
        public long Id { get; set; }
        [Required]
        public DateTime Start_Date { get; set; }
        [Required]
        public DateTime End_Date { get; set; }
        [Required]
        public string? Reason { get; set; }
        [Required]
        public string? Status { get; set; }

        public long EmployeeID { get; set; }
        public Employee? Employee { get; set; }
    }
}
