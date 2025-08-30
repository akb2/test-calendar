using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TestCalendar.Server.Models;

namespace TestCalendar.Server.Controllers
{
  [ApiController]
  [Route("api/calendar/")]
  public class CalendarController : ControllerBase
  {
    private readonly string SessionMonthKey = "_SelectedMonth";
    private readonly string SessionYearKey = "_SelectedYear";

    private readonly ILogger<CalendarController> _logger;

    public CalendarController(ILogger<CalendarController> logger)
    {
      _logger = logger;
    }

    private Month GetMonth()
    {
      int? sessionMonth = HttpContext.Session.GetInt32(SessionMonthKey);

      return (Month)(sessionMonth ?? DateTime.Now.Month - 1);
    }

    private int GetYear()
    {
      int? sessionYear = HttpContext.Session.GetInt32(SessionYearKey);

      return sessionYear ?? DateTime.Now.Year;
    }

    [HttpGet]
    [AllowAnonymous]
    [Route("selected-date")]
    public ActionResult<SelectedDate> GetDate()
    {
      Month month = GetMonth();
      int year = GetYear();
      SelectedDate selectedDate = new SelectedDate
      {
        Month = month,
        Year = year
      };

      return Ok(selectedDate);
    }

    [HttpPut]
    [AllowAnonymous]
    [Route("selected-date")]
    public IActionResult SetDate([FromBody] SelectedDate date)
    {
      if (date == null)
      {
        return BadRequest();
      }

      HttpContext.Session.SetInt32(SessionMonthKey, (int)date.Month);
      HttpContext.Session.SetInt32(SessionYearKey, date.Year);

      return NoContent();
    }
  }
}