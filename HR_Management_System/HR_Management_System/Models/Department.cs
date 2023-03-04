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

        //public ICollection<Employee> Employees { get; set; }
    }
}
/*
 CREATE TABLE [dbo].[Department] (
    [department_id]   BIGINT         IDENTITY (1, 1) NOT NULL,
    [department_name] NVARCHAR (50)  NOT NULL,
    [department_des]  NVARCHAR (500) NOT NULL,
    PRIMARY KEY CLUSTERED ([department_id] ASC)
);

 */