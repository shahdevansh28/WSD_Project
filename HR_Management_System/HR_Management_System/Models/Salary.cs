using HR_Management_System.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using System.ComponentModel.DataAnnotations;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace HR_Management_System.Models
{
    public class Salary
    {
        public long Id { get; set; }
        [Required]
        public long Amount { get; set; }
        [Required]
        public string Description { get; set; }

        public Employee Employee { get; set; }

    }
}
/*
CREATE TABLE[dbo].[Salary] (
    [salary_id]     BIGINT IDENTITY(1, 1) NOT NULL,
    [salary_amount] BIGINT         NOT NULL,
    [salary_desc]   NVARCHAR (100) NOT NULL,
    [salary_emp_id] BIGINT         NOT NULL,
    PRIMARY KEY CLUSTERED ([salary_id] ASC),
    CONSTRAINT[FK_Salary_Employee] FOREIGN KEY([salary_emp_id]) REFERENCES[dbo].[Employee]([emp_id])
);
*/