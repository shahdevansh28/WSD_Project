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

        //public ICollection<Leave>? Leaves { get; set; }
    }
}
/*
 CREATE TABLE [dbo].[Employee] (
    [emp_id]            BIGINT         IDENTITY (1, 1) NOT NULL,
    [emp_username]      NVARCHAR (50)  NOT NULL,
    [emp_email]         NVARCHAR (100) NOT NULL,
    [emp_password]      NVARCHAR (10)  NOT NULL,
    [emp_name]          NVARCHAR (100) NOT NULL,
    [emp_dob]           DATE           NOT NULL,
    [emp_mobile]        NVARCHAR (10)  NOT NULL,
    [emp_address]       NVARCHAR (100) NOT NULL,
    [emp_join_date]     DATE           NOT NULL,
    [emp_department_id] BIGINT         NOT NULL,
    [isAdmin]           INT            NOT NULL,
    [emp_gender]        NVARCHAR (1)   NULL,
    PRIMARY KEY CLUSTERED ([emp_id] ASC),
    CONSTRAINT [FK_Employee_Department] FOREIGN KEY ([emp_department_id]) REFERENCES [dbo].[Department] ([department_id])
);
 */