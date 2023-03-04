using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HR_Management_System.Models;

namespace HR_Management_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LeavesController : ControllerBase
    {
        private readonly HRMContext _context;

        public LeavesController(HRMContext context)
        {
            _context = context;
        }

        // GET: api/Leaves
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Leave>>> GetLeaves()
        {
          if (_context.Leaves == null)
          {
              return NotFound();
          }
            return await _context.Leaves.ToListAsync();
        }

        // GET: api/Leaves/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Leave>> GetLeave(long id)
        {
          if (_context.Leaves == null)
          {
              return NotFound();
          }
            var leave = await _context.Leaves.FindAsync(id);

            if (leave == null)
            {
                return NotFound();
            }

            return leave;
        }

        // PUT: api/Leaves/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLeave(long id, Leave leave)
        {
            if (id != leave.Id)
            {
                return BadRequest();
            }

            _context.Entry(leave).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LeaveExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Leaves
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Leave>> PostLeave(Leave leave)
        {
          if (_context.Leaves == null)
          {
              return Problem("Entity set 'HRMContext.Leaves'  is null.");
          }
            _context.Leaves.Add(leave);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLeave", new { id = leave.Id }, leave);
        }

        // DELETE: api/Leaves/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLeave(long id)
        {
            if (_context.Leaves == null)
            {
                return NotFound();
            }
            var leave = await _context.Leaves.FindAsync(id);
            if (leave == null)
            {
                return NotFound();
            }

            _context.Leaves.Remove(leave);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LeaveExists(long id)
        {
            return (_context.Leaves?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
