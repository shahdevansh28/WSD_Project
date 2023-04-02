using System.ComponentModel.DataAnnotations;

namespace HR_Management_System.Models
{
    public class Department
    {
        public long Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Description { get; set; }
    }
}