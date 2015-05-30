using System.Web.Mvc;

namespace Blog.Controllers
{
    public class TutorialsController : Controller
    {

        // GET: /Tutorials/
        public ActionResult Index()
        {
            return View();
        }

		// GET: /GitBasics/
        public ActionResult GitBasics()
        {
            return View();
        }

		// GET: /JsBasics/
        public ActionResult JsBasics()
        {
            return View();
        }
    }
}