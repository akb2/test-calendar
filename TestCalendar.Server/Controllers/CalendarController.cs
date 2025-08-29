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
    public SelectedDate GetDate()
    {
      Month month = GetMonth();
      int year = GetYear();

      return new SelectedDate
      {
        Month = month,
        Year = year
      };
    }
  }
}