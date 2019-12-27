using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ForumReactRedux.Data;
using ForumReactRedux.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ForumReactRedux.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly ForumReactReduxContext _context;

        public QuestionsController(ForumReactReduxContext context)
        {
            _context = context;
        }

        // GET: api/Questions
        [HttpGet]
        public IEnumerable<Question> GetQuestion()
        {
            var questions = _context.Question.Include(q => q.User).ToList();
            questions.ForEach(a => a.User.Password = String.Empty);
            return questions;
        }

        // GET: api/Questions/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetQuestion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var question = await _context.Question
                .Where(q => q.Id == id)
                .Select(q => new
                {
                    id=q.Id,
                    header=q.Header,
                    content=q.Content,
                    user=q.User,
                    answers=q.Answers,
                    status=q.Status,
                    //answerIds= q.Answers.Select(a => a.Id ),
                    //answers = q.Answers.Count(),
                })
                .FirstOrDefaultAsync();

            if (question == null)
            {
                return NotFound();
            }
            question.user.Password = String.Empty;
            return Ok(question);
        }

        // GET: api/Questions/5/answers
        [HttpGet("{id}/answers")]
        public async Task<IActionResult> GetQuestionAnswers([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var answers = await _context.Answer
                .Where(a => a.QuestionId == id)
                .Include(a => a.User)
                .ToListAsync();

            if (answers == null)
            {
                return NotFound();
            }
            answers.ForEach(a => a.User.Password = String.Empty);
            return Ok(answers);
        }

        // PUT: api/Questions/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestion([FromRoute] int id, [FromBody] Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != question.Id)
            {
                return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QuestionExists(id))
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

        // POST: api/Questions
        [HttpPost]
        public async Task<IActionResult> PostQuestion([FromBody] Question question)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Question.Add(question);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetQuestion", new { id = question.Id }, question);
        }

        // DELETE: api/Questions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var question = await _context.Question.FindAsync(id);
            if (question == null)
            {
                return NotFound();
            }

            _context.Question.Remove(question);
            await _context.SaveChangesAsync();

            return Ok(question);
        }

        private bool QuestionExists(int id)
        {
            return _context.Question.Any(e => e.Id == id);
        }
    }
}