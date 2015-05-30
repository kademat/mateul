using System.Web.Mvc;

namespace Blog.Controllers
{
    public class AboutController : Controller
    {

        // GET: /About/
        public ActionResult Index()
        {
            return View();
        }
	}
}